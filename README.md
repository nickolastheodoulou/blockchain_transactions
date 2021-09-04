# bc-tx-project

## How to run the project locally
1) Ensure docker is running on your machine
2) Run the shell command 
```shell
docker-compose -f docker-compose-dev.yml up
```
The app should then run after everything is downloaded. 

## How to stop the project
Run the command
```shell
docker-compose down --remove-orphans && docker container prune -f
```
