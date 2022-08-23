FROM node:lts-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm","start"]