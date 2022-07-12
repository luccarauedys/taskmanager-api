CREATE TABLE "users"(
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR NOT NULL,
	"email" VARCHAR UNIQUE NOT NULL,
	"password" VARCHAR NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT NOW(),
	"deletedAt" DATE DEFAULT NULL
);

CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"title" TEXT NOT NULL,
	"startDate" DATE NOT NULL,
	"endDate" DATE NOT NULL,
	"createdBy" INTEGER REFERENCES users(id),
	"createdAt" DATE NOT NULL DEFAULT NOW(),
	"deletedAt" DATE DEFAULT NULL
);

CREATE TABLE "users_tasks"(
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER REFERENCES users(id),
	"taskId" INTEGER REFERENCES tasks(id),
  "createdAt" DATE NOT NULL DEFAULT NOW(),
  "deletedAt" DATE DEFAULT NULL
);
