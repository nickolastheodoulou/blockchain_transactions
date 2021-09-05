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


## How to run the unit tests
<sup>Note automatic testing for this dockererised project has not been enabled and will need to be run manually</sup>

In the root directory run the following commands to test the client:
1) Go to the client directory
```shell
cd services/client        
```
2) Shell into the docker container
```shell
docker exec -it client /bin/sh
```
3) Run the tests
```shell
yarn test  
```

## Overview of the project

