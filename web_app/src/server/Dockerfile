FROM node:16

# define the enviroment
ENV NODE_ENV=production

#set the default working directory
WORKDIR /app

#copy the package dependency files into the image
COPY ["package.json", "package-lock.json*", "./"]

#pip install all the dependencies for this app
RUN npm install --production

#copy all the source code located in the current directory and copies them into the image
COPY . .

CMD [ "node", "server.js" ]