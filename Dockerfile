FROM node:14.0.0

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python
RUN npm install -g @nestjs/cli
RUN npm install -g pm2@latest

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir /home/node/app
RUN mkdir /home/node/app/node_modules

COPY ./package.json /home/node/app/package.json

RUN chown -R node /home/node/app/node_modules
USER node

RUN cd /home/node/app && ls

WORKDIR /home/node/app
COPY . /home/node/app