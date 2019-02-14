FROM node:8

WORKDIR /usr/src/app

COPY dmaapDR_redir.js ./
COPY package*.json ./
COPY cert/ cert/

RUN npm install

EXPOSE 3908
EXPOSE 3909

CMD [ "node", "./dmaapDR_redir.js" ]
