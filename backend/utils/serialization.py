import json
from models.cabinet import Cabinet, CabinetComponent, Vector3, ComponentType


def cabinet_to_dict(cabinet: Cabinet) -> dict:
    """将 Cabinet 对象序列化为字典"""
    return json.loads(cabinet.model_dump_json())


def dict_to_cabinet(data: dict) -> Cabinet:
    """将字典反序列化为 Cabinet 对象"""
    return Cabinet.model_validate(data)


def cabinet_to_json(cabinet: Cabinet) -> str:
    """将 Cabinet 对象序列化为 JSON 字符串"""
    return cabinet.model_dump_json(indent=2)


def json_to_cabinet(json_str: str) -> Cabinet:
    """将 JSON 字符串反序列化为 Cabinet 对象"""
    return Cabinet.model_validate_json(json_str)


def component_summary(cabinet: Cabinet) -> list[dict]:
    """获取组件摘要列表"""
    summaries = []
    for comp in cabinet.components:
        summaries.append({
            "id": comp.id,
            "name": comp.name,
            "type": comp.type.value,
            "position": comp.position.model_dump(),
            "dimensions": {"length": comp.length, "width": comp.width, "height": comp.height},
            "material": comp.material,
            "color": comp.color,
        })
    return summaries


def component_detail(comp: CabinetComponent) -> dict:
    """获取单个组件完整信息"""
    return json.loads(comp.model_dump_json())