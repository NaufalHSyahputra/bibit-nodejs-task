
# Bibit Node JS Task

A small ExpressJS server to search movies from
http://www.omdbapi.com/


## Features

- Search Movie
- Get Detail Movie by IMDB ID
- Get Detail Movie by Movie Title
- Log

  
## Demo

Search Demo URL: http://143.198.183.254:3003/movie/search?s=rush

Detail Demo URL: http://143.198.183.254:3003/movie/detail?i=tt0293564

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MYSQL_ROOT_PASSWORD`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_DATABASE`

`MYSQL_HOST`

`MYSQL_LOCAL_PORT`

`MYSQL_DOCKER_PORT`

`NODE_LOCAL_PORT`

`NODE_DOCKER_PORT`

`OMDBAPI_URL`

`OMDBAPI_APIKEY`

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/NaufalHSyahputra/bibit-nodejs-task.git
```

Go to the app directory

```bash
  cd bibit-nodejs-task/app
```

Install dependencies (optional, only if you want to make changes in code)

```bash
  npm install
```
Go back to the project directory

```bash
  cd ../
```

Copy .env.example to .env

```bash
  cp .env.example .env
```
Configure your .env

Start the docker server
```bash
  docker-compose up -d
```
## Running Tests
Before running tests, make sure the docker server is already up. 

Get Container ID, find node-mysql-app image.

```bash
  docker ps
```

To run tests, run the following command

```bash
  docker exec -it <container_id> npm run test
```
## Tech Stack

**Server:** Node, Express, MysQL, Docker

  
## Other Answer Online Technical Test

#### 1. Simple Database querying

Answer: otheranswer/nomor1.sql

#### 3. Please refactor the code below to make it more concise, efficient and readable with good logic flow.

Answer: otheranswer/nomor3new.js

#### 4. Logic Test

Answer: otheranswer/nomor4.js