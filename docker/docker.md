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

## Networking
