# Docker Mastery with Bret Fisher

`Basics`

```bash
docker --help               # Get help
docker version              # Returns the version on your client / verify cli can talk to engine
docker info                 # Returns most config values of engine
docker                      # Gives a list of docker commands
```

---

`Creating and Using Images / Containers`

**An Image is the application we want to run**

**A container is an instance of that image running as a process**

**Go to dockers default image "registry" is at [docker dub](https://hub.docker.com/)**

```bash
docker container run --publish 80:80 nginx                        # Start a NEW container
docker container run --publish 80:80 -d nginx                     # Start a NEW container in detach mode
docker container start --publish 80:80 -d nginx                   # Start an existing container in detach mode
docker container stop <container-id/name>                         # Stop container (must not be running)
docker container rm <container-id/name>                           # remove container
docker container rm -f <container-id/name>                        # remove container by force
docker container ls / ps                                          # List running docker containers
docker container ls -a / docker ps -a                             # List all docker containers (running/stopped)
docker container logs <container-name/id>                         # Get container logs
docker top <container-name/id>                                    # show process list in one container
docker container stats                                            # performance stats for all containers
```

`Initialize A Shell Inside Containers`

```bash
docker container run -it                                          # start new container interactively
docker container exec -it                                         # run additional command in existing container
docker container run -it --name proxy nginx bash                  # start container with bash shell
```

`Docker Network concepts for Private /Public Comms in containers`

```bash
docker network ls                                                 # Show available docker networks
docker network create my_app_net                                  # create a new network
docker network rm <id/container-name>                             # remove network
docker container inspect <container-name>                         # inspect a network
docker container port <container-name/id>                         # expose port information for container
docker network connect <network-name/id>                                            # attach a network to container
```

`Docker Networks: DNS`

**Containers shouldn't rely on IP's for inter-communication**

**DNS for friendly names is built-in if you use custom networks**

**Docker Compose makes all this easier**

`Container Images Building/Finding Them`

**Images are made up of file system changes and metadata**

**Each layer is uniquely identified and only stored once on a host**

**This saves storage space on host and transfer time on push/pull**

**A container is just a single read/write layer on top of an image**

```bash
docker image ls                                                                     # view download images
docker image pull <image-name/id>                                                   # pull images from docker hub
docker image inspect <image-name/id>                                                # shows image layer build
docker image history <image-name/id>                                                # shows image history
docker image tag <image-name/id> <your-docker-user-name>/<image>:<tag-name>         # create image with tag
docker push <image-name/id>                                                         # push image to your docker repos
docker image prune                                                                  # clean up "dangling" images
docker system prune                                                                 # clean up everything your not using
docker image prune -a                                                               # remove all images not in use
docker system df                                                                    # See space usage
```

---

`PERSISTENT DATA: VOLUMES`

```bash
docker volume ls                                                     # Show available volumes
docker volume inspect                                                # Show volume meta data
docker -v <volume-name>:<volume-location>                            # name your volume location
docker create volume (--help)                                        # create volume ahead of container
docker cp <folder/file-path> <container-name/id>:/<folder-path>      # copy file/folder to specified path in container
`
```
