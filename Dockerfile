FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN pnpm i

COPY . .

RUN npx prisma generate --schema=src/infra/db/schema.prisma

EXPOSE 4000

CMD ["npm", "run", "dev"]