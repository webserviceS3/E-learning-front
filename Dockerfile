# Use an official Node.js runtime as a parent image
FROM node:18.12.1-alpine3.15

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install --force --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port on which the application will run
EXPOSE 5173

# Run the application
CMD ["npm", "run", "dev"]
