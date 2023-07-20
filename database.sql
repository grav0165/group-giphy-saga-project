CREATE DATABASE "giphy_search_favorites";

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "link" VARCHAR (500) NOT NULL,
    "catagory_id" INT
)

INSERT INTO "favorites" ("link")
VALUES ('https://media.giphy.com/media/Td2t0SIt6nr1PGP2CV/giphy.gif')
-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
