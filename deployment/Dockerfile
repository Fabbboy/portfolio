FROM node:lts-alpine3.20

RUN apk add --no-cache \
  wget \
  unzip \
  bash

WORKDIR /app

COPY ./package.json ./package-lock.json ./

COPY . .

RUN npm run build
RUN npm prune --production

EXPOSE 3000
CMD ["npm", "start"]
