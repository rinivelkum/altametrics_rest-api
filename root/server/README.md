# Running the app

## Instalation

```sh
npm install
```

## Running the app in development mode

```sh
npm run dev
```

## Running the app in production mode

```sh
npm run start:prod
```

# Database Setup with Docker

## Prerequisites

- Docker and Docker Compose installed on your system
- Docker daemon running

## Getting Started

1. Start the PostgreSQL database:

```sh
docker-compose up -d
```

2. Connect to the PostgreSQL container:

```sh
docker exec -it altametrics_postgres bash
```

3. Access the PostgreSQL command line (psql):

```sh
psql -U altametrics -d altametrics
```

4. Check if the tables where initialized

```sh
\dt
```

5. Check if the schema was correctly initialized

```sh
\d "User" \d "Invoice"
```

# Using Prisma

## Prerequisites

- Go through the steps required to set up docker and the DB
- Run `npm install` to make sure prisma is installed

## Getting started

1. Add the following variable to your `.env` file if it doesn't exist already

```sh
DATABASE_URL="postgresql://altametrics:altametrics@localhost:5432/altametrics?schema=public"
```

2. Update your prisma schema to match the database

```sh
npx prisma db pull
```

3. (Optional) Create a migration with the initial state of the DB if it doesn't exit

```sh
npx prisma migrate dev --name init
```

4. Generate prisma client

```sh
npx prisma generate
```

5. Run the `seed` script

```sh
npx prisma db seed
```

# Authentication

JWT is used for auth

## Default testing credentials

If you have set up your local database and ran the `seed` prisma script,
then you already have two users created which you can use to test the application

```sh
email:    user1@example.com
password: password1
```

```sh
email:    user2@example.com
password: password2
```

Using the `/auth/login` route with your username and password will return a bearer token which you can use to access resources/

# Running tests

## Unit tests

```sh
npm run test
```

## e2e tests

```sh
npm run test:e2e
```

## test coverage

```sh
npm run test:cov
```
