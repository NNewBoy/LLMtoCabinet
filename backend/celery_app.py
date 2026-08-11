"""Celery 实例配置

用途：为 Cabinet3D Editor 提供后台任务能力（如批量操作、数据清理等）。

本地开发：
    celery -A celery_app worker --loglevel=info --concurrency=1
Docker / K8s：
    celery -A celery_app worker --loglevel=info --queues=tocabinet_queue --concurrency=1
"""

import os
import sys
from pathlib import Path
from celery import Celery

# 确保项目根目录在 Python 路径中
sys.path.insert(0, str(Path(__file__).parent))

from config import CELERY_BROKER_URL, CELERY_BACKEND_URL, CELERY_QUEUE

celery_app = Celery(
    "tocabinet",
    broker=CELERY_BROKER_URL,
    backend=CELERY_BACKEND_URL,
    include=["tasks"],
)

celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="Asia/Shanghai",
    enable_utc=False,
    task_track_started=True,
    task_acks_late=True,
    broker_connection_retry_on_startup=True,
    task_routes={
        "tasks.*": {"queue": CELERY_QUEUE},
    },
)


@celery_app.task(name="health.check")
def health_check():
    """简单心跳任务，用于验证 Celery 与 Redis 连通性。"""
    return "ok"