FROM node:alpine
RUN mkdir -p /usr/src/PatiKom/Server
WORKDIR /usr/src/PatiKom/Server
COPY ./package.json /usr/src/PatiKom/Server
RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
COPY . /usr/src/PatiKom/Server
CMD [ "yarn","production" ]