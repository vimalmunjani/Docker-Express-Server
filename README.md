# Docker-Express-Server

## DOCKER

- docker version - version of container
- docker run <image-name> <override-command> - run container
- docker ps - list of running containers
- docker ps --all - list of all present containers ( ever created, including non running containers )
- docker run = docker create + docker start
- docker create <image-name> - creates container and emits container ID
- docker start <container-id> - starts the container but does not attach the terminal, so output of the container ain't visible
- docker start -a <container-id> - starts the container and attachs the terminal, so output of the container is visible
- docker system prune - remove all containers and images from the cache
- docker logs <container-id> - retrieve the output log
- docker stop <container-id> - stopping the process in the container gracefully ( SIGTERM ) ( in 10s or kill will be executed )
- docker kill <container-id> - shut down right now, obviously not gracefully ( SIGKILL )
- docker exec -it <container-id> <command> - run cmd in already running container
-it flag - [ STDIN, STDOUT, STDERR ] - channel attached to the running process , -it actually -i -t, -i enables 3 channels, -t enables kindoff pretty formatting
- docker exec -it <container-id> sh - get the shell access to this container, sh - shell or bash
- docker run -it <image-name> sh - run container and access the shell, cannot have default command
- docker push <image-id>

**ctrl D / exit - to exit the shell**

### creating a docker image - 
create a docker file -> pass to the docker client -> pass the docker server -> builds a usable image

### docker file - 
take a base image
install additional programs
give the startup command

### config --
Dockerfile

instruction telling server 
what to do 

> FROM					alpine 

> RUN					apk add --update redis

> CMD					["redis-server"]

docker build .
docker build -t <docker-id>/<image-name>:<version> . - tagging the image (<version is the actual tagging>)
every instruction creates new image/continer - 
Docker caches the build/ Run cmd

create a image from the container - mimicking the Dockerfile
docker commit -c 'CDM ["<default-command>", .., .....]' <container-id>

docker run -p <in-port>:<out-port> <image-name>


## KUBERNETES

- kubectl version
- kubectl get pods
- kubectl apply -f <config-file-name>
- kubectl exec -it <pod-name> <cmd>
- kubectl logs <pod-name>
- kubectl delete pod <pod-name>
- kubectl describe pod <pod-name>


- Deployment manage the pods (same pods)


- kubectl get deployments
- kubectl describe deployment <deployment-name>
- kubectl delete deployment <deployment-name>

### Updating deployments

1. reiterate all steps (not preferred)
2. image tag should be latest in spec
	push the image to hub
	kubectl rollout restart deployment <depl-name>
	

> **Services provide networking between pods**

- communication between pods - cluster IP

