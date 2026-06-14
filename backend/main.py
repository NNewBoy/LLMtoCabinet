import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.connection import init_db
from api.projects import router as projects_router
from api.websocket import router as ws_router

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("cabinet3d")


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("正在初始化数据库...")
    await init_db()
    logger.info("数据库初始化完成")
    logger.info("Cabinet3D Editor API 启动成功")
    yield
    logger.info("Cabinet3D Editor API 正在关闭...")


app = FastAPI(title="Cabinet3D Editor API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects_router)
app.include_router(ws_router)


@app.get("/")
async def root():
    return {"message": "Cabinet3D Editor API", "version": "1.0.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    from config import HOST, PORT
    logger.info(f"启动服务器 {HOST}:{PORT}")
    uvicorn.run("main:app", host=HOST, port=PORT, reload=True)
