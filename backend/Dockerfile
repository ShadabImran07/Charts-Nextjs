FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./


# Bundle app source
COPY . .

# Expose the port
EXPOSE 3000

# Start the app with nodemon for live reloading
CMD ["npm", "run", "start"]
