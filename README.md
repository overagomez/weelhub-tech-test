
# 🚀 API Setup & Usage Guide

## 🧰 Prerequisites
- Docker & Docker Compose  
- Node.js (v18+)  
- pnpm  

## ⚙️ 1. Create .env
DATABASE_URL="postgresql://wheelhub:wheelhub@localhost:5432/wheelhub"

## 🐘 2. Start Database
docker compose up -d

## 📦 3. Install Dependencies
pnpm install

## 🧩 4. Generate Prisma Client
pnpm run db:generate

## 🗃️ 5. Push Database Schema
pnpm run db:push

## 🧠 6. Run API
pnpm run dev 

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
