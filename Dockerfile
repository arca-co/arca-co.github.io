FROM node:boron

#Creating app directories
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Installing dependencies
COPY package.json /usr/src/app/

RUN npm -g install create-react-app
COPY . /usr/src/app

EXPOSE 3000

CMD ["npm","start"]
