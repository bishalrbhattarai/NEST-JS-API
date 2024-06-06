# creata an docker file for nestjs app image creation 

# Use the latest Node.js  image
FROM node

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the app's source code to the app directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "start:dev"]

# Build the image
# docker build -t nestjs-app .