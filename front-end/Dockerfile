# Use an official Node.js runtime as the parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose port 3000 for the React app to run on
EXPOSE 3000

# Set the command to run the React app
CMD ["npm", "start"]
