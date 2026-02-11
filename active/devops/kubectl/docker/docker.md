# Docker

Docker allows you to run applications with all the setup in an isolated environment.

## Containers vs VMs

### Virtual Machines

- Has it's own full operating system & typically slower.

- Has a hypervisor which provides your virtualization functionality.
  you then install your virtual machines, which then has its own guest operating system.

- Then you can setup the application you want to run.

### Containers

Share the host's operating system & typically quicker.

### Registries (Docker Hub)

This contains images for almost every application you can think of.

On your host machine you install the docker daemon, you then use the cli to issue commands that can pull these images down and install them in your local registry.

We then can create containers base don this images.

## Volumes

Lets say you have an image containing .net core. That is a compiled language, so i would have to rebuild that image and re deploy the container.

If I just want to make changes on static files like html or css i don't want to go through that build process.

Volumes allow you to have a folder on your host machine that appears as a share folder within the container. It means I can directly interact with the files on the host system and those changes are instantly reflected in the container.

## get docker version

```terminal
$ docker version
```

## get docker information

```terminal
$ docker info
```

---

## Install pre built images

```terminal
$ docker run <image-name>/<image-tag>
```

## Build an image

**The '.' indicates build context for the docker image**

```terminal
$ docker build .
```

## Build an image with verbose output.

**The '.' indicates build context for the docker image**

```terminal
$ docker build --no-cache --progress=plain .
```

## Run , publish docker containers (attached mode default)

**note**: If you would like to run in detach mode add **-d** flag

[docker run docs](https://docs.docker.com/engine/reference/commandline/run/)

```terminal
$ docker run -p 3000:3000 <image-id/image-tag>
$ docker run -p 3000:3000 -d <image-id/image-tag> //detach mode
```

## Restart , publish docker containers (de-attached mode default)

[docker run docs](https://docs.docker.com/engine/reference/commandline/run/)

```terminal
$ docker start <container-id> / <container-name>
```

## Attach mode

```terminal
$ docker start -a <container-id> / <container-name>
```

## Run with interactive terminal (-t)

```terminal
$ docker start -t <container-id> / <container-name>
```

## Receive input (-i)

```terminal
$ docker start -i <container-id> / <container-name>
```

## Show running containers

```terminal
$ docker ps
```

## Run docker with interactive shell

```terminal
$ docker run -it <image-id>
```

## Show all docker processes

```terminal
$ docker ps
```

## Show all docker processes created

```terminal
$ docker ps -a
```

## Stop docker processes

```terminal
$ docker stop <container-id> / <container-name>
```

## Stop all docker containers

```terminal
$ docker stop $(docker ps -a -q)
```

## Remove all docker containers

```terminal
$ docker stop $(docker ps -a -q)
```

## Destroy docker container on exit automatically (Container must NOT be running)

```terminal
$ docker --rm <container-id> / <container-name>
```

## Destroy docker container (Container must NOT be running)

```terminal
$ docker rm <container-id> / <container-name>
```

## Destroy ALL containers (Containers must NOT be running)

```terminal
$ docker container prune
```

## List images

```terminal
$ docker images
```

## Destroy image

**NOTE: Images being used by containers CAN NOT be deleted**

```terminal
$ docker rmi <image-id>
```

## Destroy All image

**NOTE: Images being used by containers CAN NOT be deleted**

```terminal
$ docker image prune --all
```

## Inspect Image

```terminal
$ docker image inspect <image-id>
```

## Copy files into/out of container

```terminal
$ docker cp <path-to-file/folder> / <container-id/name>:<path-to-location>
```

## naming containers (--name)

```terminal
$ docker run -p 3000:80 -d --rm --name goalsapp <image-id>
```

## tagging images (--name)

```terminal
$ docker build -t <name>:<tag-name> .
```

## pushing to remote repo

- Create docker repo on dockerhub
  - **yourusername/node-hello-world**
- create image with matching name for repo
  - **docker tag node-demo:latest yourusername/node-hello-world**
- Run the following command in the terminal

  ```terminal
  $ docker push yourusername/node-hello-world
  ```

- Ensure you are logged in for access rights

  ```terminal
  $ docker login / logout
  ```

  ## pull images (fetches latest **image**)

  ```terminal
  $ docker pull yourusername/node-hello-world
  ```

  ## List docker volumes

  ```terminal
  $ docker volume ls
  ```

  ## Adding named volumes to container (persists data when the container is shut down)

  ```terminal
  $ docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes
  ```

  ## clear volume/s

  ```terminal
  $ docker volume rm <vol-name>
  $ docker volume prune
  ```

  ## Bind mounts

  **Note: To make the volume read only add :ro**

```terminal
  $ docker run -d --rm -p 3000:80 --name feedback-app -v feedback:/app/feedback -v "<absolute-path-to-folder>/$(pwd):/app:ro" -v /app/temp -v /app/node_modules feedback-node:volumes
```

## env variables

**Dockerfile**

```js
FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ARG DEFAULT_PORT=80

ENV PORT=$DEFAULT_PORT

EXPOSE $PORT

# VOLUME ["/app/node_modules"]

CMD ["npm", "start"]
```

**.env** (this file contains variables to use for your Dockerfile, in this example we are using a variable called **PORT**)

```env
PORT=8000
```

**override variables in command line**

```terminal
$ --env PORT=8000
```

**use .env file for variables**

```terminal
$ --env-file ./.env
```

**Override default variable when building an image**

```terminal
$ docker build -t feedback-node:dev --build-arg DEFAULT_PORT=8000 .
```

**run container**

```terminal
$ docker run -d --rm -p 3000:8000 --env-file ./.env --name feedback-app -v feedback:/app/feedback -v "/path/to/your/project:/app:ro" -v /app/temp -v /app/node_modules feedback-node:env
```

## List docker networks

```terminal
$ docker network ls
```

## Create network

```terminal
$ docker network create
```

## Create network with driver

Docker also supports these alternative drivers - though you will use the "bridge" driver in most cases which is the default option when creating a network:

- **host**: For standalone containers, isolation between container and host system is removed (i.e. they share localhost as a network)

- **overlay**: Multiple Docker daemons (i.e. Docker running on different machines) are able to connect with each other. Only works in "Swarm" mode which is a dated / almost deprecated way of connecting multiple containers

- **macvlan**: You can set a custom MAC address to a container - this address can then be used for communication with that container

- **none**: All networking is disabled.

- **Third-party plugins**: You can install third-party plugins which then may add all kinds of behaviors and functionalities

```terminal
$ docker network create --driver bridge <network-name>
```

## Run container with network

```terminal
$ docker run -d --name mongodb --network <network-name> <repo/image-id>
```

---

# Docker Compose

---

**docker-compose.yaml**

```yaml
version: "3.8"
services:
  mongodb:
    image: "mongo"
    volumes:
      - data:/data/db
    # environment:
    # MONGO_INITDB_ROOT_ROOT_USERNAME: jon
    # MONGO_INITDB_ROOT_ROOT_PASSWORD: secret
    # - MONGO_INITDB_ROOT_USERNAME=jon
    env_file:
      - ./env/mongo.env
  backend:
    build: ./backend
    ports:
      - "80:80"
    volumes:
      - logs:/app/logs
      - ./backend:/app
      - /app/node_modules
    env_file:
      - ./env/backend.env
    depends_on:
      - mongodb
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend/src:/app/src
    stdin_open: true
    tty: true
    depends_on:
      - backend

volumes:
  data:
  logs:
```

## spin up containers

```terminal
$ docker-compose up
```

## spin up containers and rebuild images

```terminal
$ docker-compose up --build
```

## build images

```terminal
$ docker compose build
```

## spin down containers

```terminal
$ docker-compose down
```

## remove volumes from down containers

```terminal
$ docker-compose down -v
```
