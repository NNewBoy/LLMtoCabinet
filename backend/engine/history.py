import logging
from typing import Optional
from models.cabinet import Cabinet
from utils.serialization import cabinet_to_json
import time

logger = logging.getLogger("cabinet3d.history")


class HistoryEntry:
    """单条历史记录"""
    def __init__(self, snapshot: str, description: str = "", index: int = 0):
        self.snapshot = snapshot
        self.description = description
        self.index = index
        self.timestamp = time.time()

    def to_dict(self) -> dict:
        return {
            "index": self.index,
            "description": self.description,
            "timestamp": self.timestamp,
        }


class OperationHistory:
    """操作历史管理（Undo/Redo + 版本快照）"""

    def __init__(self):
        self._undo_stack: list[dict] = []
        self._redo_stack: list[dict] = []
        self._snapshots: list[HistoryEntry] = []
        self._current_index: int = -1

    def push(self, cabinet: Cabinet, description: str = ""):
        """保存当前状态快照到撤销栈"""
        self._undo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": description,
        })
        self._redo_stack.clear()
        logger.debug(f"保存撤销点: {description} (undo_stack={len(self._undo_stack)})")

    def save_snapshot(self, cabinet: Cabinet, description: str = ""):
        """保存一个版本快照（每次编辑后调用）"""
        # 如果当前不在最新位置，截断后续记录（覆盖分支）
        if self._current_index < len(self._snapshots) - 1:
            truncated = len(self._snapshots) - self._current_index - 1
            self._snapshots = self._snapshots[:self._current_index + 1]
            logger.info(f"截断历史分支: 删除 {truncated} 条记录")

        entry = HistoryEntry(
            snapshot=cabinet_to_json(cabinet),
            description=description,
            index=len(self._snapshots),
        )
        self._snapshots.append(entry)
        self._current_index = entry.index
        logger.info(f"保存快照: v{entry.index} - {description}")

    def get_snapshot_list(self) -> list[dict]:
        """获取所有版本快照列表"""
        return [entry.to_dict() for entry in self._snapshots]

    def get_snapshot(self, index: int) -> Optional[str]:
        """根据索引获取快照 JSON"""
        if 0 <= index < len(self._snapshots):
            logger.info(f"获取快照: v{index} - {self._snapshots[index].description}")
            return self._snapshots[index].snapshot
        logger.warning(f"快照不存在: v{index}")
        return None

    def get_current_index(self) -> int:
        return self._current_index

    def undo(self, cabinet: Cabinet) -> Optional[dict]:
        """撤销：返回上一个状态快照"""
        if not self._undo_stack:
            logger.info("撤销失败: 没有可撤销的操作")
            return None
        entry = self._undo_stack.pop()
        self._redo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": entry["description"],
        })
        logger.info(f"撤销操作: {entry['description']} (剩余undo={len(self._undo_stack)}, redo={len(self._redo_stack)})")
        return entry

    def redo(self, cabinet: Cabinet) -> Optional[dict]:
        """重做：返回下一个状态快照"""
        if not self._redo_stack:
            logger.info("重做失败: 没有可重做的操作")
            return None
        entry = self._redo_stack.pop()
        self._undo_stack.append({
            "snapshot": cabinet_to_json(cabinet),
            "description": entry["description"],
        })
        logger.info(f"重做操作: {entry['description']} (undo={len(self._undo_stack)}, 剩余redo={len(self._redo_stack)})")
        return entry

    def can_undo(self) -> bool:
        return len(self._undo_stack) > 0

    def can_redo(self) -> bool:
        return len(self._redo_stack) > 0
