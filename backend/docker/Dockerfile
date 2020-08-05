FROM node:12.16.1-alpine3.9

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn --silent

COPY . .

CMD yarn start