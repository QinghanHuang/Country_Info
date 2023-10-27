FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3001
CMD [ "node", "app.js" ]                          