# STAGE 1: Build
FROM node:22-alpine AS builder

RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

# Копируем зависимости первыми — для кэширования слоёв
COPY package*.json ./
RUN npm ci --no-audit --progress=false

# Копируем исходники
COPY . .

# Собираем приложение
RUN npm run build

# STAGE 2: Production
FROM node:22-alpine AS runner

WORKDIR /app

# Создаём непривилегированного пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимое из standalone-выхода
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Переключаемся на безопасного пользователя
USER nextjs

# Порт по умолчанию для Next.js
EXPOSE 3000

# Запуск сервера
CMD ["node", "server.js"]