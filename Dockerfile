FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install --no-optional && npm cache clean --force

CMD ["npm", "start"]
