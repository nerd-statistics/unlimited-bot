FROM node:alpine

ADD . /app
WORKDIR /app

RUN npm install --no-optional && npm cache clean --force

CMD ["npm", "start"]
