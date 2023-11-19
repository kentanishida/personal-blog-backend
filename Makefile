up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build --no-cache
	docker-compose up --force-recreate -d

logs:
	docker-compose logs -f

rs: down up

rb: down build

gr:
	yarn prisma generate

mg:
	docker-compose exec api npx prisma migrate dev

mgrt:
	docker-compose exec api npx prisma migrate reset

prrl:
	docker compose exec api npx prisma-repl

rl:
	yarn start --entryFile repl

db:
	docker compose exec db mysql -u root -P 3306

tt:
	docker compose exec api yarn test

ttw:
	docker compose exec api yarn test:watch

tte:
	docker compose exec api yarn test:e2e

ttew:
	docker compose exec api yarn test:e2e:watch

.PHONY: up down build logs rs gr mg prrl rl db
