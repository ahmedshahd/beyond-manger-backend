FROM node:14-alpine AS node_builder


COPY ./package.json /usr/src/service/package.json
COPY ./package-lock.json /usr/src/service/package-lock.json

WORKDIR /usr/src/service

RUN npm install

COPY . /usr/src/service

EXPOSE 4000

CMD npm run start:dev