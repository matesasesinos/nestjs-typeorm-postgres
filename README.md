<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository whit TypeORM.

## Docker

The file docker-compose.yml help you to create a container with PostgresSQL and PGadmin 4

## Clone

```bash
$ git clone 'repo-link'
```
## Configure data

Rename **.env.example** to **.env** and change database credentials;

In the file ormconfig.json change database crendetials. This file is important for migrations.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run migrations

```bash
# Generate initials migrations
$ npm run migrations:generate -- init

# Run initials migrations
$ npm run migrations:run
```

## Migrations commands

```bash
# Create migrations
$ npm run migrations:create -- nameOfMigration

# Drop migrations (danger!)
$ npm run migrations:drop

# Show migrations
$ npm run migrations:show

# Revert migrations
$ npm run migrations:revert
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## This repo

- Author - Juan Iriart
- Email - [jeiriart@gmail.com](jeiriart@gmail.com) | [juan.e@genosha.com.ar](juan.e@genosha.com.ar)

## License

Nest is [MIT licensed](LICENSE).
