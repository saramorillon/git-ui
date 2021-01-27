FROM node:lts-alpine

RUN apk update
RUN apk --no-cache add git python g++ make

ENV NODE_ENV=production

WORKDIR /app

# Install packages
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=false

# Copy sources
COPY tsconfig.json .
COPY ormconfig.js .
COPY migration ./migration
COPY src ./src

# Build
RUN yarn build
RUN cp -r src/fonts dist/src/

RUN yarn install --force --production --ignore-scripts --prefer-offline
RUN rm -rf tsconfig.json src

# Create data directory
RUN mkdir /data
RUN chown -R node:node /data

# Create logs directory
RUN mkdir /app/dist/logs
RUN chown -R node:node /app/dist/logs

USER node

CMD ["yarn", "start"]
