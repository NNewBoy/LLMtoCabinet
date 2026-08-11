"""Celery 异步任务

Cabinet3D Editor 后台任务（预留扩展用，当前无耗时的后台任务需要异步化）。
"""

import logging

from celery_app import celery_app

logger = logging.getLogger(__name__)


@celery_app.task(name="tasks.cleanup_expired_sessions")
def cleanup_expired_sessions():
    """清理过期的 Agent 会话缓存"""
    logger.info("[Celery] 清理过期会话缓存")
    try:
        # 预留：未来可在此清理超时的 Agent 会话
        return {"status": "completed", "cleaned": 0}
    except Exception as e:
        logger.error(f"[Celery] 清理失败: {e}")
        return {"status": "failed", "error": str(e)}