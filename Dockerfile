# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Generate Prisma client from current schema.prisma
RUN npx prisma generate

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
