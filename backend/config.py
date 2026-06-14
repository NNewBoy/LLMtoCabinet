import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./cabinet.db")
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8001"))
LLM_MODEL = os.getenv("LLM_MODEL", "glm-5.1")
LLM_API_KEY = os.getenv("LLM_API_KEY", "1a1ca55e-f078-4748-9152-ac9275c1e932")
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://ark.cn-beijing.volces.com/api/coding/v3")
SKILLS_DIR = os.getenv("SKILLS_DIR", "./agent/skills/")