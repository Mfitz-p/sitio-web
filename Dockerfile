# FROM node:alpine
FROM node:16-buster-slim as build

RUN mkdir /repo
COPY . /repo
WORKDIR /repo

RUN npm install
RUN npm cache clean --force
RUN npm run-script build
RUN rm -rf node_modules
WORKDIR /

FROM nginx:1.21.1
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/build /usr/share/nginx/html