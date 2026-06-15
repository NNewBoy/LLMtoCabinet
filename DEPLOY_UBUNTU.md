# Cabinet3D Editor Ubuntu 部署指南

本文档介绍如何将 Cabinet3D Editor 部署到 Ubuntu 服务器上。

## 目录

- [环境要求](#环境要求)
- [1. 系统准备](#1-系统准备)
- [2. 安装 Python 环境](#2-安装-python-环境)
- [3. 安装 Node.js 环境](#3-安装-nodejs-环境)
- [4. 部署后端服务](#4-部署后端服务)
- [5. 构建前端](#5-构建前端)
- [6. 配置 Nginx](#6-配置-nginx)
- [7. 配置 Systemd 服务](#7-配置-systemd-服务)
- [8. 防火墙配置](#8-防火墙配置)
- [9. SSL/HTTPS 配置（可选）](#9-sslhttps-配置可选)
- [10. 常用运维命令](#10-常用运维命令)
- [故障排查](#故障排查)

---

## 环境要求

| 组件 | 版本要求 |
|------|---------|
| Ubuntu | 20.04 LTS 或更高版本 |
| Python | 3.11+ |
| Node.js | 18+ |
| Nginx | 1.18+ |
| LLM API Key | DeepSeek / OpenAI / Anthropic |

---

## 1. 系统准备

### 更新系统

```bash
sudo apt update && sudo apt upgrade -y
```

### 安装基础依赖

```bash
sudo apt install -y curl wget git build-essential
```

### 创建项目目录

```bash
sudo mkdir -p /var/LLMtoCabinet
sudo chown $USER:$USER /var/LLMtoCabinet
```

### 克隆项目

```bash
cd /var/LLMtoCabinet
git clone <你的仓库地址> .
# 或者使用 scp/rsync 从本地上传
# scp -r ./LLMtoCabinet user@server:/var/LLMtoCabinet/
```

---

## 2. 安装 Python 环境

### 安装 Python 3.11

```bash
# 添加 Python 3.11 PPA
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update

# 安装 Python 3.11 及相关工具
sudo apt install -y python3.11 python3.11-venv python3.11-dev python3-pip
```

### 验证安装

```bash
python3.11 --version
# 应输出: Python 3.11.x
```

### 创建虚拟环境

```bash
cd /var/LLMtoCabinet/backend

# 创建虚拟环境
python3.11 -m venv venv

# 激活虚拟环境
source venv/bin/activate

# 升级 pip
pip install --upgrade pip
```

### 安装后端依赖

```bash
pip install -r requirements.txt
```

---

## 3. 安装 Node.js 环境

### 使用 NodeSource 安装 Node.js 18

```bash
# 添加 NodeSource 仓库
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# 安装 Node.js
sudo apt install -y nodejs

# 验证安装
node --version  # 应输出: v18.x.x
npm --version   # 应输出: 9.x.x 或更高
```

### 安装前端依赖并构建

```bash
cd /var/LLMtoCabinet/frontend

# 安装依赖
npm install

# 构建生产版本
npm run build
```

构建完成后，静态文件将生成在 `frontend/dist/` 目录。

---

## 4. 部署后端服务

### 配置环境变量

```bash
cd /var/LLMtoCabinet/backend

# 从模板创建 .env 文件
cp .env.example .env

# 编辑 .env 文件，填入你的 LLM API Key
nano .env
```

> **必填项**: `LLM_MODEL` 和 `LLM_API_KEY` 必须配置为实际值，否则后端无法启动。
> 其他配置项可使用默认值。

### .env 主要配置项

| 变量 | 说明 | 示例值 |
|------|------|--------|
| `LLM_MODEL` | LLM 模型 | `deepseek:deepseek-chat` |
| `LLM_API_KEY` | API 密钥 | `sk-xxxx` |
| `HOST` | 监听地址 | `127.0.0.1` |
| `PORT` | 监听端口 | `8001` |
| `DATABASE_URL` | 数据库连接串 | `sqlite+aiosqlite:///./cabinet.db` |
| `LLM_BASE_URL` | API 地址（可选） | `https://api.deepseek.com` |

### 创建数据目录

```bash
mkdir -p /var/LLMtoCabinet/backend/data
```

### 测试后端启动

```bash
cd /var/LLMtoCabinet/backend
source venv/bin/activate

# 测试运行
uvicorn main:app --host 127.0.0.1 --port 8001

# 如果看到类似以下输出表示成功:
# INFO:     Started server process [xxxxx]
# INFO:     Waiting for application startup.
# INFO:     Application startup complete.
# INFO:     Uvicorn running on http://127.0.0.1:8001

# 按 Ctrl+C 停止测试
```

---

## 5. 构建前端

### 前端路径配置说明

前端已配置为部署到 `/llmtocabinet/` 子路径：

- `vite.config.ts` 中 `base: '/llmtocabinet/'`
- `src/config.ts` 自动处理 API 和 WebSocket 路径前缀
- 开发环境使用根路径，生产环境自动添加 `/llmtocabinet` 前缀

### 构建生产版本

```bash
cd /var/LLMtoCabinet/frontend
npm run build
```

### 复制静态文件到 Nginx 目录

```bash
sudo mkdir -p /var/www/llmtocabinet
sudo cp -r /var/LLMtoCabinet/frontend/dist/* /var/www/llmtocabinet/
sudo chown -R www-data:www-data /var/www/llmtocabinet
```

---

## 6. 配置 Nginx

### 安装 Nginx

```bash
sudo apt install -y nginx
```

### 创建站点配置

```bash
sudo nano /etc/nginx/sites-available/LLMtoCabinet
```

### Nginx 配置内容

```nginx
# 在已有的 server {} 块中添加以下 location 配置
# 或创建新的 server 块

# 静态文件目录结构:
# /var/www/llmtocabinet/
# ├── index.html
# └── assets/
#     ├── index-xxx.js
#     └── index-xxx.css

# Cabinet3D Editor - 路径: /llmtocabinet
# root 会将 location 路径拼接到 root 路径后面
# 请求 /llmtocabinet/assets/index.js -> /var/www/llmtocabinet/assets/index.js
location /llmtocabinet {
    root /var/www;
    index index.html;
    try_files $uri $uri/ /llmtocabinet/index.html;
}

# API 代理
location /llmtocabinet/api/ {
    proxy_pass http://127.0.0.1:8001/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# WebSocket 代理
location /llmtocabinet/ws/ {
    proxy_pass http://127.0.0.1:8001/ws/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_read_timeout 86400;
}

# 静态资源缓存
location ~* /llmtocabinet/.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    root /var/www;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 部署静态文件

```bash
# 创建目录
sudo mkdir -p /var/www/llmtocabinet

# 复制构建产物
sudo cp -r /var/LLMtoCabinet/frontend/dist/* /var/www/llmtocabinet/

# 设置权限
sudo chown -R www-data:www-data /var/www/llmtocabinet

# 验证文件结构
ls -la /var/www/llmtocabinet/
# 应该看到: index.html  assets/
```

### 启用站点

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/LLMtoCabinet /etc/nginx/sites-enabled/

# 删除默认站点（可选）
sudo rm /etc/nginx/sites-enabled/default

# 测试配置
sudo nginx -t

# 重载 Nginx
sudo systemctl reload nginx
```

---

## 7. 配置 Systemd 服务

### 创建后端服务文件

```bash
sudo nano /etc/systemd/system/LLMtoCabinet.service
```

### 服务配置内容

```ini
[Unit]
Description=LLMtoCabinet Editor Backend
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/var/LLMtoCabinet/backend
Environment="PATH=/var/LLMtoCabinet/backend/venv/bin"
EnvironmentFile=/var/LLMtoCabinet/backend/.env
ExecStart=/var/LLMtoCabinet/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8001 --workers 4
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

> **注意**: 使用 root 用户运行可以避免权限问题。如果需要更安全的配置，请参考下方的"非 root 用户运行"章节。

### 设置目录权限

```bash
# 确保项目目录可访问
sudo chmod -R 755 /var/LLMtoCabinet
sudo chmod -R 777 /var/LLMtoCabinet/backend/data
```

### 启动服务

```bash
# 重载 systemd 配置
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start LLMtoCabinet

# 设置开机自启
sudo systemctl enable LLMtoCabinet

# 查看服务状态
sudo systemctl status LLMtoCabinet
```

---

## 8. 防火墙配置

### 使用 UFW 配置防火墙

```bash
# 启用防火墙
sudo ufw enable

# 允许 SSH
sudo ufw allow ssh

# 允许 HTTP
sudo ufw allow 80/tcp

# 允许 HTTPS（如果需要）
sudo ufw allow 443/tcp

# 查看防火墙状态
sudo ufw status
```

---

## 9. SSL/HTTPS 配置（可选）

### 使用 Let's Encrypt 免费证书

```bash
# 安装 Certbot
sudo apt install -y certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期测试
sudo certbot renew --dry-run
```

### Certbot 会自动修改 Nginx 配置，添加 HTTPS 支持。

---

## 10. 常用运维命令

### 服务管理

```bash
# 启动后端服务
sudo systemctl start LLMtoCabinet

# 停止后端服务
sudo systemctl stop LLMtoCabinet

# 重启后端服务
sudo systemctl restart LLMtoCabinet

# 查看服务状态
sudo systemctl status LLMtoCabinet

# 查看服务日志
sudo journalctl -u LLMtoCabinet -f

# 查看最近 100 行日志
sudo journalctl -u LLMtoCabinet -n 100
```

### Nginx 管理

```bash
# 测试配置
sudo nginx -t

# 重载配置
sudo systemctl reload nginx

# 重启 Nginx
sudo systemctl restart nginx

# 查看 Nginx 日志
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 更新项目

```bash
cd /var/LLMtoCabinet

# 拉取最新代码
git pull origin main

# 更新后端依赖
cd backend
source venv/bin/activate
pip install -r requirements.txt

# 重新构建前端
cd ../frontend
npm install
npm run build

# 复制新的静态文件
sudo cp -r dist/* /var/www/LLMtoCabinet/

# 重启后端服务
sudo systemctl restart LLMtoCabinet
```

### 数据库备份

```bash
# 备份 SQLite 数据库
cp /var/LLMtoCabinet/backend/cabinet.db /var/LLMtoCabinet/backend/cabinet.db.backup.$(date +%Y%m%d)

# 定时备份（添加到 crontab）
# 每天凌晨 3 点备份
0 3 * * * cp /var/LLMtoCabinet/backend/cabinet.db /var/LLMtoCabinet/backend/cabinet.db.backup.$(date +\%Y\%m\%d).db
```

---

## 故障排查

### 1. 后端服务无法启动

```bash
# 查看详细日志
sudo journalctl -u LLMtoCabinet -n 50 --no-pager

# 手动测试启动
cd /var/LLMtoCabinet/backend
source venv/bin/activate
uvicorn main:app --host 127.0.0.1 --port 8001
```

### 2. WebSocket 连接失败

检查 Nginx WebSocket 代理配置：

```bash
# 测试 WebSocket 连接
curl -i -N -H "Connection: Upgrade" -H "Upgrade: websocket" -H "Sec-WebSocket-Key: test" -H "Sec-WebSocket-Version: 13" http://your-domain.com/ws/test
```

### 3. 前端显示空白

```bash
# 检查静态文件是否存在
ls -la /var/www/llmtocabinet/

# 检查 Nginx 配置
sudo nginx -t

# 检查浏览器控制台是否有错误
```

### 4. API 请求 404

```bash
# 确认后端服务正在运行
curl http://127.0.0.1:8001/docs

# 检查 Nginx 代理配置
sudo nginx -t
```

### 5. 权限问题

```bash
# 修复文件权限
sudo chown -R www-data:www-data /var/LLMtoCabinet
sudo chown -R www-data:www-data /var/www/llmtocabinet
sudo chmod -R 755 /var/LLMtoCabinet
sudo chmod -R 777 /var/LLMtoCabinet/backend/data
```

---

## 性能优化（可选）

### 1. 增加 Worker 数量

编辑 `/etc/systemd/system/LLMtoCabinet.service`：

```ini
ExecStart=/var/LLMtoCabinet/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8001 --workers 8
```

### 2. 配置 Redis 缓存（可选）

```bash
# 安装 Redis
sudo apt install -y redis-server

# 安装 Python Redis 包
pip install redis

# 在 .env 中添加
REDIS_URL=redis://localhost:6379/0
```

### 3. Nginx 缓存优化

在 `nginx.conf` 的 `http` 块中添加：

```nginx
# 代理缓存
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=api_cache:10m max_size=100m inactive=60m;
```

---

## 完整部署检查清单

- [ ] Ubuntu 系统已更新
- [ ] Python 3.11+ 已安装
- [ ] Node.js 18+ 已安装
- [ ] 项目代码已克隆/上传
- [ ] Python 虚拟环境已创建
- [ ] 后端依赖已安装
- [ ] `.env` 文件已配置（包含正确的 API Key）
- [ ] 后端服务可以手动启动
- [ ] 前端已构建（`npm run build`）
- [ ] 静态文件已复制到 `/var/www/llmtocabinet/`
- [ ] Nginx 已配置并启用
- [ ] Systemd 服务已创建并启动
- [ ] 防火墙已配置
- [ ] 服务已设置开机自启
- [ ] 浏览器可以正常访问

---

如有问题，请查看项目日志或提交 Issue。

**日志位置**:
- 后端日志: `sudo journalctl -u LLMtoCabinet`
- Nginx 访问日志: `/var/log/nginx/access.log`
- Nginx 错误日志: `/var/log/nginx/error.log`
