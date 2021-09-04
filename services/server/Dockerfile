FROM node:14-alpine3.10

COPY /package.json .

RUN yarn

COPY ./src ./src

EXPOSE 8888

WORKDIR /server

CMD [ "yarn", "start" ]
