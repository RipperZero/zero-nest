# build stage
FROM node:18.0-alpine3.14 as build-stage

WORKDIR /app

COPY package.json .

# RUN npm config set registry https://registry.npmmirror.com/

# RUN npm config set proxy http://10.167.23.54:8080/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:18.0-alpine3.14 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

# RUN npm config set registry https://registry.npmmirror.com/

# RUN npm config set proxy http://10.167.23.54:8080/

RUN npm install --production

RUN npm install -g pm2

EXPOSE 8080

CMD [ "pm2-runtime", "/app/main.js" ]