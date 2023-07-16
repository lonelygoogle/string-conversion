## Instructions to Take home code test

Q2.Unit test for Q2 it in src/jumble/jumble.service.spec.ts, run the following code to test it.

```bash
$ npx jest jumble.service.spec.ts
```

You can also run the following in root directary to run all the test cases.

```bash
$ npm run test
```

Q3.I use the libraries of nestjs to setup the service, and use class-transformer
and class-validator to valid the params and body to test if n is a string that
can be transformed to a valid number and if message is not empty.

Q4.although Q4 says I can choose 1 option to deploy.I accomplish all the options.For 1st please see my Dockerfile.
For 2nd, please visit http://54.79.167.146:3001.
for 3rd, can run command npm run start:dev locally.

All 3 ways are OK.I recommend you to use 2nd, visit http://54.79.167.146:3001.
If you want to test the POST api, visit http://54.79.167.146:3001/0 with the body
{
"message": "test 123!"
}

Q5.I find 2 ways can implement a rate limiter mechanism, 1 is use middleware with
the logic in src/middlewares/rate-limiter.middleware.ts. The other one is use the libary of @nestjs/throttler. I tested both, both are OK.I comment the middleware solution and use @nestjs/throttler

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## License

Nest is [MIT licensed](LICENSE).
