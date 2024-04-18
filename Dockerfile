# Use the latest Node.js image
FROM node

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the prisma folder
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the app's source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:dev"]
