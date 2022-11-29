# POC Prisma Monorepo
A proof of concepts of a project using prisma orm, and publish like a library to use in other modules of the application like apis and serveless functions.
# Environment Variables
- `DATABASE_URL`: Database connection for prisma
# How to install
Install the dependencies
In root folder run:
```
yarn
```
And run the application:
```
yarn api:dev
```
# How to publish
To publish the repository package:
```
yarn repository:publish
```
# How to run in docker
To run using docker you can use:
```
docker-compose build
docker-compose up
```