#FROM node:10
FROM 674293907349.dkr.ecr.us-east-1.amazonaws.com/node:10

COPY . .
RUN npm install

EXPOSE 80
CMD [ "node", "app.js" ]
