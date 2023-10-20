FROM node:18-alpine
WORKDIR /usr/src/api

# Copy and install packages
COPY package*.json .
RUN npm ci

# Copy and run server
COPY . .
CMD ["npm", "start"]