# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.6.0] - 2020-01-06
### Added
- Add "install-project" job in "testing-project" workflow
### Changed
- Change dependencies in "testing-project" workflow


## [3.5.0] - 2020-01-06
### Added
- Add "running-test" job in "testing-project" workflow


## [3.4.0] - 2020-01-06
### Changed
- Clean circle-ci config


## [3.3.3] - 2020-01-06
### Changed
- Remove useless port forwarding in docker-compose.prod


## [3.3.2] - 2020-01-06
### Added
- Add support of git tags to tag docker images
- Add app running test

### Changed
- Reorganization of the workflow


## [3.2.1] - 2020-01-06
### Changed
- Change the image creation and push on docker hub.
  Only the nodejs image is now managed.

## [3.2.0] - 2020-01-05
### Added
- Add auto push docker image with circle ci
- Add mention of docker images on the hub and slack in readme


## [3.1.0] - 2020-01-05
### Added
- Add changelogs & readme files
- Add jobs and workflow on circleci config to build and push automatically to the docker hub
- Add `docker-clean` yarn or npm command on package.json. Please read the readme for more information


## [3.0.0] - 2020-01-04
### Added
- Add presistant data for postgres container

### Changed
- Change root location to nginx default page instead of api container


## [2.1.0] - 2020-01-03
### Added
- Add circleci icon to readme

### Changed
- Clean circleci config


## [2.0.0] - 2020-01-03
### Added
- Add eslint to the project
- Add prettier to the project

### Changed
- Update 


## [1.2.0] - 2020-01-03
### Changed
- Move nodemon into devDependencies in package.json


## [1.1.0] - 2020-01-03
### Added
- Add circleci config

### Changed
- Reorganization of the project


## [1.0.0] - 2020-01-03
### Added
- Create repository
- Add API & docker files from API repository [tp2-mottard-maxence](https://github.com/YI-B3-Devops/tp2-mottard-maxence)
