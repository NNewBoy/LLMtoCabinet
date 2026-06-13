from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database.connection import get_session
from models.database import Project, User
from models.cabinet import create_default_cabinet
from engine.cabinet_manager import CabinetManager
from agent.tools import get_manager
from utils.serialization import cabinet_to_json, json_to_cabinet

router = APIRouter(prefix="/api/projects", tags=["projects"])


async def _ensure_user(session: AsyncSession, user_id: str = "default_user") -> User:
    """确保默认用户存在"""
    result = await session.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()
    if not user:
        user = User(id=user_id, name="默认用户")
        session.add(user)
        await session.commit()
    return user


@router.post("")
async def create_project(name: str = "新柜子项目", session: AsyncSession = Depends(get_session)):
    """创建新项目（初始化默认柜子）"""
    user = await _ensure_user(session)

    cabinet = create_default_cabinet()
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

    return {
        "id": project.id,
        "name": project.name,
        "cabinet": cabinet.model_dump(),
        "created_at": project.created_at.isoformat(),
    }


@router.get("/{project_id}")
async def get_project(project_id: str, session: AsyncSession = Depends(get_session)):
    """获取项目信息及柜子模型"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")

    cabinet = json_to_cabinet(project.cabinet_json)

    # 确保 manager 已加载
    manager = get_manager(project_id)
    if manager.cabinet is None:
        manager.load(cabinet)

    return {
        "id": project.id,
        "name": project.name,
        "cabinet": cabinet.model_dump(),
        "created_at": project.created_at.isoformat(),
        "updated_at": project.updated_at.isoformat(),
    }


@router.put("/{project_id}")
async def update_project(project_id: str, name: str = None, session: AsyncSession = Depends(get_session)):
    """更新项目信息"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")

    manager = get_manager(project_id)
    if name:
        project.name = name
    if manager.cabinet:
        project.cabinet_json = cabinet_to_json(manager.cabinet)

    await session.commit()
    return {"id": project.id, "name": project.name, "message": "更新成功"}


@router.delete("/{project_id}")
async def delete_project(project_id: str, session: AsyncSession = Depends(get_session)):
    """删除项目"""
    result = await session.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")

    await session.delete(project)
    await session.commit()

    # 清理 manager
    from agent.tools import _managers
    _managers.pop(project_id, None)

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


@router.post("/{project_id}/undo")
async def undo_operation(project_id: str):
    """撤销上一步操作"""
    manager = get_manager(project_id)
    result = manager.undo()
    return result


@router.post("/{project_id}/redo")
async def redo_operation(project_id: str):
    """重做已撤销操作"""
    manager = get_manager(project_id)
    result = manager.redo()
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