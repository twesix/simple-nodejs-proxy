FROM node:9.4.0

COPY lib /app/lib
COPY package.json /app

WORKDIR /app

RUN npm install

EXPOSE 8888

CMD ["npm", "start"]