# pull official base image
FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH

COPY . /app/

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run build


FROM nginx:1.16.0-alpine
COPY --from=build /app/build  /usr/share/nginx/html


# add app

EXPOSE 80
# start app
CMD ["nginx", "-g", "daemon off;" ]

