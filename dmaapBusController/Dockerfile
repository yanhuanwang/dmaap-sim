FROM node:8

WORKDIR /usr/src/app

COPY dmaapBusController.js ./
COPY package*.json ./
COPY cert/ cert/

RUN npm install

EXPOSE 6665
EXPOSE 6666

CMD [ "node", "./dmaapBusController.js" ]
