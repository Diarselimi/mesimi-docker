FROM ubuntu

WORKDIR /app

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install npm -y

EXPOSE 3000
CMD ['npm' 'install', '--quiet']

