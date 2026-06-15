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
sudo mkdir -p /opt/cabinet3d
sudo chown $USER:$USER /opt/cabinet3d
```

### 克隆项目

```bash
cd /opt/cabinet3d
git clone <你的仓库地址> .
# 或者使用 scp/rsync 从本地上传
# scp -r ./LLMtoCabinet user@server:/opt/cabinet3d/
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
cd /opt/cabinet3d/backend

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
cd /opt/cabinet3d/frontend

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
cd /opt/cabinet3d/backend

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
mkdir -p /opt/cabinet3d/backend/data
```

### 测试后端启动

```bash
cd /opt/cabinet3d/backend
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

### 配置生产环境变量（可选）

如果需要修改 API 地址，编辑 `frontend/.env.production`:

```bash
cd /opt/cabinet3d/frontend

cat > .env.production << 'EOF'
VITE_API_BASE_URL=/api
VITE_WS_URL=ws://your-domain.com/ws
EOF
```

### 构建生产版本

```bash
npm run build
```

### 复制静态文件到 Nginx 目录

```bash
sudo mkdir -p /var/www/cabinet3d
sudo cp -r /opt/cabinet3d/frontend/dist/* /var/www/cabinet3d/
sudo chown -R www-data:www-data /var/www/cabinet3d
```

---

## 6. 配置 Nginx

### 安装 Nginx

```bash
sudo apt install -y nginx
```

### 创建站点配置

```bash
sudo nano /etc/nginx/sites-available/cabinet3d
```

### Nginx 配置内容

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名或服务器 IP

    # 前端静态文件
    root /var/www/cabinet3d;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;

    # 前端路由 - SPA 支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 代理 - REST
    location /api/ {
        proxy_pass http://127.0.0.1:8001/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # WebSocket 代理
    location /ws/ {
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
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 启用站点

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/cabinet3d /etc/nginx/sites-enabled/

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
sudo nano /etc/systemd/system/cabinet3d-backend.service
```

### 服务配置内容

```ini
[Unit]
Description=Cabinet3D Editor Backend
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/opt/cabinet3d/backend
Environment="PATH=/opt/cabinet3d/backend/venv/bin"
EnvironmentFile=/opt/cabinet3d/backend/.env
ExecStart=/opt/cabinet3d/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8001 --workers 4
Restart=always
RestartSec=5

# 安全加固
NoNewPrivileges=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/opt/cabinet3d/backend/data
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

### 设置目录权限

```bash
sudo chown -R www-data:www-data /opt/cabinet3d/backend
sudo chmod -R 755 /opt/cabinet3d/backend
sudo chmod -R 777 /opt/cabinet3d/backend/data
```

### 启动服务

```bash
# 重载 systemd 配置
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start cabinet3d-backend

# 设置开机自启
sudo systemctl enable cabinet3d-backend

# 查看服务状态
sudo systemctl status cabinet3d-backend
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
sudo systemctl start cabinet3d-backend

# 停止后端服务
sudo systemctl stop cabinet3d-backend

# 重启后端服务
sudo systemctl restart cabinet3d-backend

# 查看服务状态
sudo systemctl status cabinet3d-backend

# 查看服务日志
sudo journalctl -u cabinet3d-backend -f

# 查看最近 100 行日志
sudo journalctl -u cabinet3d-backend -n 100
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
cd /opt/cabinet3d

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
sudo cp -r dist/* /var/www/cabinet3d/

# 重启后端服务
sudo systemctl restart cabinet3d-backend
```

### 数据库备份

```bash
# 备份 SQLite 数据库
cp /opt/cabinet3d/backend/data/cabinet3d.db /opt/cabinet3d/backend/data/cabinet3d.db.backup.$(date +%Y%m%d)

# 定时备份（添加到 crontab）
# 每天凌晨 3 点备份
0 3 * * * cp /opt/cabinet3d/backend/data/cabinet3d.db /opt/cabinet3d/backups/cabinet3d_$(date +\%Y\%m\%d).db
```

---

## 故障排查

### 1. 后端服务无法启动

```bash
# 查看详细日志
sudo journalctl -u cabinet3d-backend -n 50 --no-pager

# 手动测试启动
cd /opt/cabinet3d/backend
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
ls -la /var/www/cabinet3d/

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
sudo chown -R www-data:www-data /opt/cabinet3d
sudo chown -R www-data:www-data /var/www/cabinet3d
sudo chmod -R 755 /opt/cabinet3d
sudo chmod -R 777 /opt/cabinet3d/backend/data
```

---

## 性能优化（可选）

### 1. 增加 Worker 数量

编辑 `/etc/systemd/system/cabinet3d-backend.service`：

```ini
ExecStart=/opt/cabinet3d/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8001 --workers 8
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
- [ ] 静态文件已复制到 `/var/www/cabinet3d/`
- [ ] Nginx 已配置并启用
- [ ] Systemd 服务已创建并启动
- [ ] 防火墙已配置
- [ ] 服务已设置开机自启
- [ ] 浏览器可以正常访问

---

如有问题，请查看项目日志或提交 Issue。

**日志位置**:
- 后端日志: `sudo journalctl -u cabinet3d-backend`
- Nginx 访问日志: `/var/log/nginx/access.log`
- Nginx 错误日志: `/var/log/nginx/error.log`
