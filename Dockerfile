# Start your image with a node base image
FROM node:16.19.0
# Create working directory
RUN mkdir -p /nest
# The /nest directory should act as the main application directory
WORKDIR /nest
# Copy to working directory
COPY . ./
# Install node packages, build
RUN npm install 
RUN npm run build
# Start the app using serve command
CMD npm run start:prod
# Expose port 
EXPOSE 80
