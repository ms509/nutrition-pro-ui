FROM node:10-alpine as node
# Install some base requirements:
RUN apk update; apk upgrade; apk add bash curl git wget

# Install NPM
RUN npm install -g npm 

# Get the User ready!
RUN adduser -S app

RUN mkdir /app 

USER app

FROM node as core

ADD . /app

USER root
RUN chown -R app /app
USER app
WORKDIR /app

FROM core as prod
RUN build/hooks/pre-deploy

# Some npm packages are distributing RSA keys with their test suites
# This removes them for the security scan.
RUN find . -type f | grep "\.\(key\|pem\|priv\)$" | xargs rm -f

CMD ["npm", "start"]
