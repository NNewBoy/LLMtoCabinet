import logging
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database.connection import get_session
from models.database import Project, User
from models.cabinet import create_default_cabinet
from engine.cabinet_manager import CabinetManager
from agent.tools import get_manager
from utils.serialization import cabinet_to_json, json_to_cabinet

logger = logging.getLogger("cabinet3d.api")

router = APIRouter(prefix="/api/projects", tags=["projects"])


class UpdateComponentRequest(BaseModel):
    component_id: str
    properties: dict


async def _ensure_user(session: AsyncSession, user_id: str = "default_user") -> User:
    """确保默认用户存在"""
    result = await session.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()
    if not user:
        user = User(id=user_id, name="默认用户")
        session.add(user)
        await session.commit()
        logger.info(f"创建默认用户: {user_id}")
    return user


@router.get("")
async def list_projects(session: AsyncSession = Depends(get_session)):
    """获取所有方案列表"""
    result = await session.execute(select(Project).order_by(Project.updated_at.desc()))
    projects = result.scalars().all()
    logger.info(f"获取方案列表，共 {len(projects)} 个方案")
    return [
        {
            "id": p.id,
            "name": p.name,
            "created_at": p.created_at.isoformat(),
            "updated_at": p.updated_at.isoformat(),
        }
        for p in projects
    ]


@router.post("")
async def create_project(name: str = "新柜子项目", session: AsyncSession = Depends(get_session)):
    """创建新项目（初始化默认柜子）"""
    user = await _ensure_user(session)

    cabinet = create_default_cabinet().model_copy(deep=True)
    cabinet_json = cabinet_to_json(cabinet)

    project = Project(
        user_id=user.id,
        name=name,
        cabinet_json=cabinet_json,
    )
    session.add(project)
    await session.commit()
    await session.refresh(project)

    # 初始化 CabinetManager
    manager = get_manager(project.id)
    manager.load(cabinet)

    logger.info(f"创建新项目: {project.id} - {name}")
    return {
        "id": project.id,
        "name": project.name,
        "cabinet": cabinet.model_dump(),
        "created_at": project.created_at.isoformat(),
    }


@router.get("/{project_id}")
async def get_project(project_id: str, session: AsyncSession = Depends(get_session)):
    """获取项目信息及柜子模型（切换方案时使用，从数据库加载并重置 manager）"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        logger.warning(f"项目不存在: {project_id}")
        raise HTTPException(status_code=404, detail="项目不存在")

    cabinet = json_to_cabinet(project.cabinet_json)

    # 切换方案时，重置 manager 为数据库中的数据
    manager = get_manager(project_id)
    manager.load(cabinet)

    logger.info(f"加载项目: {project_id} - {project.name}")
    return {
        "id": project.id,
        "name": project.name,
        "cabinet": cabinet.model_dump(),
        "created_at": project.created_at.isoformat(),
        "updated_at": project.updated_at.isoformat(),
    }


@router.put("/{project_id}")
async def update_project(project_id: str, name: str = None, session: AsyncSession = Depends(get_session)):
    """更新项目信息，不存在则新建"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()

    manager = get_manager(project_id)

    if not project:
        # 项目不存在，新建
        user = await _ensure_user(session)
        cabinet = manager.cabinet if manager.cabinet else create_default_cabinet().model_copy(deep=True)
        project = Project(
            id=project_id,
            user_id=user.id,
            name=name or "未命名方案",
            cabinet_json=cabinet_to_json(cabinet),
        )
        session.add(project)
        logger.info(f"新建项目: {project_id}")
    else:
        if name:
            project.name = name
            logger.info(f"重命名项目 {project_id}: {name}")
        if manager.cabinet:
            project.cabinet_json = cabinet_to_json(manager.cabinet)

    await session.commit()
    logger.info(f"保存项目: {project_id}")
    return {"id": project.id, "name": project.name, "message": "保存成功"}


@router.delete("/{project_id}")
async def delete_project(project_id: str, session: AsyncSession = Depends(get_session)):
    """删除项目"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        logger.warning(f"删除失败，项目不存在: {project_id}")
        raise HTTPException(status_code=404, detail="项目不存在")

    await session.delete(project)
    await session.commit()

    # 清理 manager
    from agent.tools import _managers
    _managers.pop(project_id, None)

    logger.info(f"删除项目: {project_id} - {project.name}")
    return {"message": "项目已删除"}


@router.get("/{project_id}/cabinet")
async def get_cabinet(project_id: str, session: AsyncSession = Depends(get_session)):
    """获取柜子完整 Object JSON"""
    manager = get_manager(project_id)
    if manager.cabinet is None:
        result = await session.execute(select(Project).where(Project.id == project_id))
        project = result.scalar_one_or_none()
        if not project:
            raise HTTPException(status_code=404, detail="项目不存在")
        cabinet = json_to_cabinet(project.cabinet_json)
        manager.load(cabinet)

    return {"cabinet": manager.to_dict()}


@router.put("/{project_id}/components/{component_id}")
async def update_component(project_id: str, component_id: str, request: UpdateComponentRequest):
    """修改组件属性（颜色、材料等）"""
    logger.info(f"修改组件属性: {component_id}, 属性: {request.properties}")
    manager = get_manager(project_id)
    result = manager.modify(target_id=component_id, properties=request.properties)

    if "error" in result:
        logger.warning(f"修改失败: {result['error']}")
        raise HTTPException(status_code=400, detail=result["error"])

    logger.info(f"修改成功: {component_id}")
    return result


@router.post("/{project_id}/undo")
async def undo_operation(project_id: str):
    """撤销上一步操作"""
    logger.info(f"撤销操作: {project_id}")
    manager = get_manager(project_id)
    result = manager.undo()
    logger.info(f"撤销结果: {result.get('message', '未知')}")
    return result


@router.post("/{project_id}/redo")
async def redo_operation(project_id: str):
    """重做已撤销操作"""
    logger.info(f"重做操作: {project_id}")
    manager = get_manager(project_id)
    result = manager.redo()
    logger.info(f"重做结果: {result.get('message', '未知')}")
    return result


@router.get("/{project_id}/history")
async def get_history(project_id: str):
    """获取操作历史"""
    manager = get_manager(project_id)
    return {
        "can_undo": manager.history.can_undo(),
        "can_redo": manager.history.can_redo(),
        "undo_count": len(manager.history._undo_stack),
        "redo_count": len(manager.history._redo_stack),
    }


@router.get("/{project_id}/snapshots")
async def get_snapshots(project_id: str):
    """获取历史版本快照列表"""
    manager = get_manager(project_id)
    snapshots = manager.history.get_snapshot_list()
    logger.info(f"获取快照列表: {project_id}, 共 {len(snapshots)} 个快照")
    return {
        "current_index": manager.history.get_current_index(),
        "snapshots": snapshots,
    }


@router.post("/{project_id}/snapshots/{index}/restore")
async def restore_snapshot(project_id: str, index: int):
    """恢复到指定历史版本"""
    logger.info(f"恢复快照: {project_id} -> 版本 {index}")
    manager = get_manager(project_id)
    snapshot = manager.history.get_snapshot(index)
    if not snapshot:
        logger.warning(f"快照不存在: {project_id} 版本 {index}")
        raise HTTPException(status_code=404, detail="快照不存在")
    from utils.serialization import json_to_cabinet
    manager.cabinet = json_to_cabinet(snapshot)
    manager.history._current_index = index
    logger.info(f"已恢复到版本 {index}")
    return {
        "success": True,
        "message": f"已恢复到版本 {index}",
        "cabinet": manager.to_dict(),
    }
