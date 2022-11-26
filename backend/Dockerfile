FROM node:alpine
WORKDIR /backend
COPY . .
RUN npm install
COPY . .
EXPOSE 3007
ENTRYPOINT [ "npm", "start" ]
