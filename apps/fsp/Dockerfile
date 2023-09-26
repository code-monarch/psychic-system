# Fetching the latest node image on alpine linux
FROM node:alpine AS development
# Declaring env
ENV NODE_ENV development
# Setting up the work directory
WORKDIR /react-app
# Installing dependencies
COPY ./package.json /react-app
RUN npm install -g pnpm
RUN pnpm install turbo --global
RUN turbo run build --filter ui
RUN turbo run dev --filter fsp
# Copying all the files in our project
COPY . .
# Starting our application
CMD npm start