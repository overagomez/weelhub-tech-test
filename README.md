
# 🚀 API Setup & Usage Guide

## 🧰 Prerequisites
- Docker & Docker Compose  
- Node.js (v18+)  
- pnpm  

## ⚙️ 1. Create .env
use .env-example

## 🐘 2. Start Database
docker compose up -d --build

run again docker compose up -d --build

## 🧰 package.json Scripts
{
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
  }
}

## 🧾 Workflow Summary
| Step | Command |
|------|----------|
| 1️⃣ | docker compose up -d |
| 2️⃣ | pnpm install |
| 3️⃣ | pnpm run db:generate |
| 4️⃣ | pnpm run db:push |


## Open in browser

Open in browser with localhost:3001
