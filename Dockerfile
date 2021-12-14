FROM node:alpine

WORKDIR /usr/app

RUN npm install -g npm

COPY package*.json ./
RUN npm install

RUN npm install -g sequelize-cli

CMD [ "npm", "start" ]