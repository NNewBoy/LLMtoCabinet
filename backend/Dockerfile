FROM python:3.12-slim

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 安装系统依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc g++ libffi-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

COPY . .

# 数据目录
RUN mkdir -p data

EXPOSE 8001

# Gunicorn 管理 2 个 Uvicorn Worker
# WebSocket 需要 uvicorn[standard] 的 asyncio 支持
CMD ["gunicorn", "main:app", \
     "--workers", "2", \
     "--worker-class", "uvicorn.workers.UvicornWorker", \
     "--bind", "0.0.0.0:8001", \
     "--timeout", "120", \
     "--access-logfile", "-", \
     "--error-logfile", "-"]