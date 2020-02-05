FROM node:latest
########
RUN mkdir -p /app
WORKDIR /app
######
COPY . ./
RUN npm install && npm install pm2 -g
EXPOSE 3000
CMD [ "node", "server.js" ]
