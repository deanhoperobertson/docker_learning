# docker_learning
A repo for learning how to create and utilize Docker images and containers across different languages.

## Basic Docker Commands

For build, view and running images:
```
- docker build -t IMAGE_NAME .
- docker images
- docker run IMAGE_NAME
```

For deleting images and active containers:
```
- docker ps (shows running)
- docker ps -a (shows all)

- docker rm CONTAINER_ID
- docker container prune (removes all stopped containers)
- docker rmi IMAGE_ID
```

## Run Flask Apps (Gunicorn optional) on Port

Run python flask app by exposing the port inside the container to another port outside the container:
```
- docker run -p TARGET_PORT:HOST_PORT IMAGE_NAME
```

To run the app in detached mode:
```
- docker run -d -p TARGET_PORT:HOST_PORT IMAGE_NAME
- docker stop CONTAINER_ID/NAME
- docker restart CONTAINER_ID/NAME
```

## Run NodeJS Apps on Port

Run Nodejs app by exposing the port inside the container to another port outside the container:
```
- docker run -it --init -p TARGET_PORT:HOST_PORT IMAGE_NAME
```

## Run Web Application with Docker-Compose

Run Nodejs app by exposing the port inside the container to another port outside the container:
```
- docker-compose up
```