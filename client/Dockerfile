FROM node:17-slim

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . /app/
CMD [ "npm", "start" ]