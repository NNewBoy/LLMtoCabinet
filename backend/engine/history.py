from typing import Optional
from models.cabinet import Cabinet
from utils.serialization import cabinet_to_json


class OperationHistory:
    """操作历史管理（Undo/Redo）"""

    def __init__(self):
        self._undo_stack: list[dict] = []
        self._redo_stack: list[dict] = []

    def push(self, cabinet: Cabinet, description: str = ""):
        """保存当前状态快照到撤销栈"""
        self._undo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": description,
        })
        self._redo_stack.clear()

    def undo(self, cabinet: Cabinet) -> Optional[dict]:
        """撤销：返回上一个状态快照"""
        if not self._undo_stack:
            return None
        entry = self._undo_stack.pop()
        self._redo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": entry["description"],
        })
        return entry

    def redo(self, cabinet: Cabinet) -> Optional[dict]:
        """重做：返回下一个状态快照"""
        if not self._redo_stack:
            return None
        entry = self._redo_stack.pop()
        self._undo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": entry["description"],
        })
        return entry

    def can_undo(self) -> bool:
        return len(self._undo_stack) > 0

    def can_redo(self) -> bool:
        return len(self._redo_stack) > 0