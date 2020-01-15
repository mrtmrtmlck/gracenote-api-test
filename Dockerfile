FROM node:12

COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm install --production

COPY app /app

EXPOSE 8080
CMD node /app/index.js
