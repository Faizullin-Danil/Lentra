-- CreateTable
CREATE TABLE "favouritesmovies" (
    "id" SERIAL NOT NULL,
    "imdb_id" VARCHAR(20),
    "kinopoisk_id" INTEGER,
    "name_en" TEXT,
    "name_original" TEXT,
    "name_ru" TEXT,
    "countries" JSONB,
    "genres" JSONB,
    "persons" JSONB,
    "poster_url" TEXT,
    "poster_url_preview" TEXT,
    "rating_imdb" DECIMAL(3,1),
    "rating_kinopoisk" DECIMAL(3,1),
    "type" VARCHAR(10),
    "year" INTEGER,

    CONSTRAINT "favouritesmovies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "imdb_id" VARCHAR(20),
    "kinopoisk_id" INTEGER,
    "name_en" TEXT,
    "name_original" TEXT,
    "name_ru" TEXT,
    "countries" JSONB,
    "genres" JSONB,
    "persons" JSONB,
    "poster_url" TEXT,
    "poster_url_preview" TEXT,
    "rating_imdb" DECIMAL(3,1),
    "rating_kinopoisk" DECIMAL(3,1),
    "type" VARCHAR(10),
    "year" INTEGER,
    "movie_length" INTEGER,
    "description" TEXT,
    "rating_age_limits" TEXT,
    "videos" JSONB,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "id" SERIAL NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "kinopoisk_id" INTEGER,
    "name_en" TEXT,
    "name_ru" TEXT,
    "description" TEXT,
    "poster_url" TEXT,
    "profession_text" TEXT,
    "profession_key" VARCHAR(50),

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favouritesmovies_imdb_id_key" ON "favouritesmovies"("imdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "favouritesmovies_kinopoisk_id_key" ON "favouritesmovies"("kinopoisk_id");

-- CreateIndex
CREATE UNIQUE INDEX "movies_imdb_id_key" ON "movies"("imdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "movies_kinopoisk_id_key" ON "movies"("kinopoisk_id");

-- CreateIndex
CREATE UNIQUE INDEX "persons_staff_id_key" ON "persons"("staff_id");
