FROM node:14-alpine as build

WORKDIR /app

COPY package.json .

RUN yarn --production

COPY . .
COPY nginx_server.conf nginx_server.conf

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build ./app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build ./app/nginx_server.conf /etc/nginx/conf.d/
# COPY cf.origin.pem /etc/ssl/certs/
# COPY cf.origin.key /etc/ssl/private/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
