# docker_learning
A repo for learning how to create and utilize Docker images and containers across different languages.

## Basic Docker Commands

For build, view and running images:
```
- docker build -t IMAGE_NAME
- docker images
- docker run IMAGE_NAME
```

For deleting images and active containers:
```
- docker container ls -a OR docker ps
- docker rm CONTAINER_ID
- docker rmi IMAGE_ID
```

## Run Flask Apps on Port

Run python flask app by exposing the port inside the container to another port outside the container:
```
- docker run -p TARGET_PORT:HOST_PORT IMAGE_NAME
```

To run the app in detached mode:
```
- docker run -d -p TARGET_PORT:HOST_PORT IMAGE_NAME
- docker stop CONTAINER_ID
- docker restart CONTAINER_ID
```

## Run NodeJS Apps on Port

Run python flask app by exposing the port inside the container to another port outside the container:
```
- docker run -it --init -p TARGET_PORT:HOST_PORT IMAGE_NAME
```
