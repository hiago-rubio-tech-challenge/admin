# Etapa de build
FROM node:latest AS build

WORKDIR /usr/src/app

ARG AWS_LAMBDA_URL
ENV AWS_LAMBDA_URL=${AWS_LAMBDA_URL}

ARG MONGO_URL
ENV MONGO_URL=${MONGO_URL}


COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build


# Etapa de produção
FROM node:alpine

WORKDIR /usr/src/app

ARG MONGO_URL
ENV MONGO_URL=${MONGO_URL}

ARG AWS_LAMBDA_URL
ENV AWS_LAMBDA_URL=${AWS_LAMBDA_URL}


COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/dist app/dist
RUN npm install --omit=dev

RUN echo "starting the app"

EXPOSE 3002

CMD ["node", "dist/src/app.js"]
