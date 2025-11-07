#!/bin/sh
set -e

echo "Running database migrations..."
npx prisma migrate deploy --schema=src/infra/db/schema.prisma

echo "Migrations completed successfully!"
echo "Starting application..."

exec "$@"