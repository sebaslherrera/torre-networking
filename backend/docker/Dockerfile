FROM node:12.16.1-alpine3.9 as build

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn --silent

COPY . .

CMD yarn start