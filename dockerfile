FROM node:latest

WORKDIR /server

COPY . /server

COPY package*.json /server

RUN npm install




EXPOSE 8080

CMD node server.js