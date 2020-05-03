# Base Image
FROM node:alpine

# Set the working directory
WORKDIR /usr/app

# Install deps
COPY ./package.json ./
RUN npm install

# Copy the files
COPY ./ ./

# Default command
CMD [ "npm", "start" ]