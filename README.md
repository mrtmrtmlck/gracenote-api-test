# API Developer code test

## Prerequisites
This exercise requires you to have installed:
- [docker and docker-compose](https://www.docker.com/products/developer-tools)
- (Optional) A MongoDB client
  - [Robo3T](https://robomongo.org/download)
  - [Node.js mongodb driver](https://mongodb.github.io/node-mongodb-native/)
  - ...
  
## Local stack
A local stack with some infrastructure for this code test can be started by running
```bash
docker-compose up --build
```
from inside this directory. This will:
- Boot up a local MongoDB (available on port 27017)
- Load the data into the MongoDB
- Boot up a local application (available on port 8080) connecting to the MongoDB

## API Features
This API provides an endpoint which you can query with a single SportsEvent's ID and will return a hierarchy of SportsEvents containing all children of the Event, and those Events children, and onwards. That is, provided a query
```
GET /sportsevents/GNFDPEF9DJCBAK1
```

## Test
In order to run unit tests
```
npm test
``` 
