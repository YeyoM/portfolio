FROM node:18-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Adjusted to reflect the new directory structure
COPY pages ./pages
COPY public ./public
COPY posts ./posts
COPY lib ./lib
COPY components ./components
COPY next.config.js .
COPY jsconfig.json .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY .eslintrc.json .
COPY . .

ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Build the app
RUN npm run build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Check if the `server.js` file exists and copy it
RUN if [ -f /app/.next/standalone/server.js ]; then echo "server.js found"; else echo "server.js not found"; fi

# Ensure server.js exists in the correct location
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/server.js ./server.js

CMD ["node", "server.js"]

EXPOSE 3000

