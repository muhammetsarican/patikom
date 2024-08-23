FROM node:alpine
RUN mkdir -p /usr/src/PatiKom/Client
WORKDIR /usr/src/PatiKom/Client
COPY ./package.json /usr/src/PatiKom/Client
RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
COPY . /usr/src/PatiKom/Client
CMD [ "yarn","dev" ]