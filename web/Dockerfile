FROM node:20.10-alpine

WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml* ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install

# Copy application code
COPY . .

# Build Next.js
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
