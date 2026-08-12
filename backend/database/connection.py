from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from models.database import Base
from config import DATABASE_URL

engine = create_async_engine(DATABASE_URL, echo=False)
async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def init_db():
    """初始化数据库表

    多 Worker 环境下并发执行 create_all 可能报 table already exists，
    checkfirst=True（默认）理论上会跳过已存在的表，但 SQLite 并发 DDL 仍可能冲突，
    因此加异常捕获保证非首次 Worker 不中断启动。
    """
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all, checkfirst=True)
    except Exception as e:
        import logging
        logging.getLogger(__name__).warning(f"init_db: 表可能已存在，跳过 ({e})")


async def get_session() -> AsyncSession:
    async with async_session() as session:
        yield session