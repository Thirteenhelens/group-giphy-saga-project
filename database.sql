CREATE DATABASE "giphy_search_favorites";

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


-- Favroites Table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "image_url" TEXT NOT NULL,
    "category_id" INT REFERENCES "category"
);

-- Default Values
INSERT INTO "favorites" ("name", "image_url")
VALUES ('Bill Is Funny', 'https://giphy.com/gifs/politics-bill-clinton-democrat-xrWNh6MHjO7HW');
