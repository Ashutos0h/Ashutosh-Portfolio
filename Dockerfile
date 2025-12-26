# Use Node.js version 20 (matches your project types)
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (to use Docker cache for faster installs)
COPY package.json package-lock.json ./

# Install ALL dependencies (including 'tsx' and other devDependencies)
# We do not use --production here so that the build script can run
RUN npm install

# Copy the rest of your project files
COPY . .

# Run the build script (this runs "tsx script/build.ts")
RUN npm run build

# Expose port 5000 (Standard for Express apps on Render/Replit templates)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]