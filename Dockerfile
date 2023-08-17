# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install nano and git
RUN apt-get update && \
    apt-get install -y nano git && \
    rm -rf /var/lib/apt/lists/*

# Clone the repository from GitHub
RUN git clone https://github.com/pinkmoon25/Resume-builder.git

# Set the working directory to the cloned repository
WORKDIR /app/Resume-builder

# Install npm packages
RUN npm install

# Expose the port if the application requires it
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "start"]
