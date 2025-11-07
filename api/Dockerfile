FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install

# Copy source
COPY src ./src

# Generate Prisma client (default location)
RUN npx prisma generate --schema=src/infra/db/schema.prisma

# Build TypeScript
RUN pnpm build
RUN ls -R dist || (echo "dist folder missing" && exit 1)

# Copy entrypoint script
COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

EXPOSE 4100

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["pnpm", "start"]