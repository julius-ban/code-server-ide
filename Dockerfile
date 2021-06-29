FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json
COPY ./ /app

RUN npm install 

EXPOSE 3000
CMD ["npm", "start"]