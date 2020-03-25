# base image
FROM node:12.2.0-alpine

# set working directory

add `/bibliofront/node_modules/.bin` to $PATH
ENV PATH /bibliofront/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
COPY . . 

CMD ["npm","start"]
