# Use a lightweight base image to serve static applications
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json
COPY package.json ./

# Install development dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the application for production
RUN npm run build

# Use a lightweight Nginx image to serve the built files
FROM nginx:alpine

# Copy the files generated in the previous stage to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

