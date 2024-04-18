# Mailer Microservice

Basic Microservice to send Mails

# Instructions

Define the following environment variables:
``` bash
FROM_EMAIL
FROM_NAME
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASSWORD
```
# Fuente:
https://maule.dev/index.php/2020/03/26/creando-un-microservicio-en-node-js-para-mandar-emails/
# DOCKER
## Crear el contenedor
docker build -t mailer .
## Arrancar el contenedor
docker run --name mailer_app --publish 4567:3000 \
--env FROM_EMAIL='rodrigoweichert@gmail.com' \
--env FROM_NAME='rodrigo' \
--env SMTP_HOST='smtp.gmail.com' \
--env SMTP_PORT=465 \
--env SMTP_SECURE=false \
--env SMTP_USER='rodrigoweichert@gmail.com' \
--env SMTP_PASSWORD='*****' \ 
mailer

## Otra forma con el archivo .env
docker run --name mailer_app --publish 4567:3000 --env-file .env mailer

# TODO List
1. Subir proyecto a gitlab
2. Crear el CI/CD para que crear el docker automáticamente