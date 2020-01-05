[![CircleCI](https://circleci.com/gh/MaxenceMottard/ynov_devops_ci_cd_project.svg?style=svg)](https://circleci.com/gh/MaxenceMottard/ynov_devops_ci_cd_project)

# B3 Devops - TP 2
## Info
Team 2
---
github _username: [MrZyr0](https://github.com/MrZyr0)
---
github _username: [MaxenceMottard](https://github.com/MaxenceMottard)
---
professor : [@aegirops](https://github.com/aegirops)
---

### Libraires & Programs installed

#### Host
Only docker

#### Containers
To run the projet, there is multiples container who run these services:
```
nodejs
nginx
postgreSQL
Redis
```

# Installation / How to start

1. Clone the repository.
2. Moving to the root of the project
3. Compose the project :

    ### Using npm
    `npm compose-(prod | dev)`

    ### Using yarn
    `yarn compose-(prod | dev)`

    ### Using manual `docker-compose` command

    - **For production** : `docker-compose -f ./Docker/docker-compose.prod.yml up --build --force-recreate`
    - **For developmnet** : `docker-compose -f ./Docker/docker-compose.dev.yml up --build --force-recreate`
4. Your done ! The environment is up and running.

# Usage
The objective of this project is to have a development environment identical to the production one, simple and quick to deploy for a nodeJS API.

From any machine with docker installed you can run the pre-configured environment.

Once the environment is launched you just have to access the API available at http://localhost:8080/api.

List of preconfigured URLs:
- http://localhost:8080               => nginx default page
- http://localhost:8080/api           =>  `Hello World` API message
- http://localhost:8080/api/status    =>  API data


In develpment mode, all is setup to speed up your productivity.
You can easily edit your javascript files of the API, **nodemon** will restart the service automaticly !

# All commands

- `dev`: start the project with nodemon (used when container start for dev mode)
- `start`: just start the API (used when container start for prod mode)
- `compose-prod`: it's an npm alias to compose up the project in production mode
- `compose-dev`: it's an npm alias to compose up the project in development mode
- `eslint-fix`: ask eslint to fix lint errors (used by circleci)
- `eslint`: ask eslint report (used by circleci)
- `docker-clean`: it's an npm alias to clean your docker (stop, rm and rmi) ⚠ **DATA can be LOST** use it carrefully ⚠

# Uninstall

1. Use CTRL-C to stop the containers
2. Use `docker-compose -f down` to remove containers
3. You can use `docker ps -a` and `docker rmi IMG_ID` to remove containers images from your computer


<!-- # DockerHub
link: https://... -->
