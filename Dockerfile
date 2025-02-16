FROM node:lts-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

WORKDIR /app
COPY pnpm-lock.yaml /app
RUN pnpm fetch --prod

COPY . /app
RUN pnpm run build

FROM base
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=prod /app/dist /app/dist

FROM httpd:2.4 AS runtime
COPY --from=prod /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
