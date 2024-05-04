FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3009

ENV NODE_ENV production

CMD ["npm", "start"]