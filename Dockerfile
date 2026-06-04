# syntax=docker/dockerfile:1

# ──────────────────────────────────────────────────────────────
# Multi-stage build for a minimal, production-ready Next.js image.
# Relies on `output: "standalone"` in next.config.ts.
# ──────────────────────────────────────────────────────────────

# 1) Install dependencies only when lockfile changes
FROM node:22-alpine AS deps
# libc6-compat is occasionally required by native deps on Alpine.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found. Run 'npm install' to generate one." && npm install; \
  fi

# 2) Build the application
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3) Minimal runtime image
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Run as a non-root user for security.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy the public assets and the standalone server output.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# server.js is emitted by the standalone build.
CMD ["node", "server.js"]
