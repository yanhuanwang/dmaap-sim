FROM node:8

WORKDIR /usr/src/app

COPY dmaapDR.js ./
COPY package*.json ./
COPY cert/ cert/

RUN npm install

EXPOSE 3906
EXPOSE 3907

CMD [ "node", "./dmaapDR.js" ]
