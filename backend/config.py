import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./cabinet.db")
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8001"))
LLM_MODEL = os.getenv("LLM_MODEL", "")
LLM_API_KEY = os.getenv("LLM_API_KEY", "")
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "")
SKILLS_DIR = os.getenv("SKILLS_DIR", "./agent/skills/")

# 干涉检查配置：是否在编辑后自动检查干涉
ENABLE_INTERFERENCE_CHECK = os.getenv("ENABLE_INTERFERENCE_CHECK", "true").lower() == "true"

# Redis / Celery 配置
REDIS_HOST = os.getenv("REDIS_HOST", "127.0.0.1")
REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))
CELERY_BROKER_DB = int(os.getenv("CELERY_BROKER_DB", "6"))
CELERY_BACKEND_DB = int(os.getenv("CELERY_BACKEND_DB", "7"))
CELERY_QUEUE = os.getenv("CELERY_QUEUE", "tocabinet_queue")

CELERY_BROKER_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/{CELERY_BROKER_DB}"
CELERY_BACKEND_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/{CELERY_BACKEND_DB}"