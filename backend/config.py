import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./cabinet.db")
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8001"))
LLM_MODEL = os.getenv("LLM_MODEL", "qwen3.7-max-2026-06-08")
LLM_API_KEY = os.getenv("LLM_API_KEY", "sk-69db4e4fdd984c1ba55ed3a936cfacf7")
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://dashscope.aliyuncs.com/compatible-mode/v1")
SKILLS_DIR = os.getenv("SKILLS_DIR", "./agent/skills/")