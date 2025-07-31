FROM node:lts-slim AS base

WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

WORKDIR /app
COPY pnpm-lock.yaml /app
RUN pnpm fetch --prod
COPY package.json /app
RUN pnpm install --prod

COPY . /app
RUN pnpm approve-builds esbuild sharp
ENV ASTRO_DB_REMOTE_URL=file:./data/database.db
RUN pnpm run build --remote

FROM base
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=prod /app/dist /app/dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
