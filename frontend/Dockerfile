# builder
FROM node:alpine AS builderFrontEnd
WORKDIR /frontend
COPY . .
RUN npm install && npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
