FROM node:16 AS client
WORKDIR /app
COPY client/ ./client/
RUN cd client && npm install && npm run build


FROM node:16 AS server
WORKDIR /app
COPY --from=client /app/client/build ./app/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/server.js ./server/
CMD ["node", "./server/server.js"]