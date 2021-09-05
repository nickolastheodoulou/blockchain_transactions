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
- The project successfully uses the mock responses  found in `/server/__mocks__` to present them in the front-end. The responses have not been modified and all data-processing occurs on the front end.
- Users are able to search all columns of their transaction list and there is also global search functionality within the application.
- The user has the option to toggle between the minimum displayed values and a larger range.
- Crypo amounts are represented in Bitcoin/Eth with unit tests ensuring they are formatted correctly.
- The main 3rd party CSS library used was styled component
- PrimeReact was a component library used for the table

- Redux/Redux saga was not implemented (due to time constraints however, I have previously used redux & Redux Thunk)
- Typescript is used across the application
- Unit tests are used for the helper functions. Due to time constraints, they were not used extensively for react components.
- The page is also optimised for mobile
- The project is Dockerised. It should be relatively straightforward to publish using AWS ECS (without time constraints)

### Ideas I would like to implement given more time
- Add icons to each cryptocurrency in the 'Coin(s)' column. Similar to a previous project https://l.linklyhq.com/l/aK9j
- Clean up the prices section above the main table. 
- Add a 'maximise' button for the dataTable that made it full screen when pressed for the user to see more data
- Update the search to multiselect for columns where it is more suitable e.g. 'Type'
- Add some branding/logo to the page
