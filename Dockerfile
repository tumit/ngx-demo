# STEP 1 build static website
FROM node:8.12.0-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/
RUN npm install --no-optional

# Copy project files into the docker image
COPY .  /app

# Build production
RUN npm run build:prod

# STEP 2 build a small nginx image with static website
FROM nginx:1.14.0-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist/ngx-demo /usr/share/nginx/html
EXPOSE 80

##
CMD ["nginx", "-g", "daemon off;"]
