FROM node:lts-alpine

WORKDIR /var/www

COPY /app/package.json .

RUN npm install

COPY /app .

EXPOSE 3000

CMD [ "npm", "start" ]