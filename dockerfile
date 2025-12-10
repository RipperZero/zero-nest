# build stage
FROM node:24.11.1-alpine as build-stage

WORKDIR /app

COPY package.json .

# RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:24.11.1-alpine as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

# RUN npm config set registry https://registry.npmmirror.com/

RUN npm install --production

RUN npm install -g pm2

EXPOSE 8080

CMD [ "pm2-runtime", "/app/main.js" ]