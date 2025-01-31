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
\d+ "User"
\d+ "Invoice"
```
