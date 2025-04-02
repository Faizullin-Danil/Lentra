-- CreateTable
CREATE TABLE "similarmovies" (
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
    "similar_kinopoisk_id" INTEGER NOT NULL,

    CONSTRAINT "similarmovies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "similarmovies_imdb_id_key" ON "similarmovies"("imdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "similarmovies_kinopoisk_id_key" ON "similarmovies"("kinopoisk_id");

-- AddForeignKey
ALTER TABLE "similarmovies" ADD CONSTRAINT "similarmovies_similar_kinopoisk_id_fkey" FOREIGN KEY ("similar_kinopoisk_id") REFERENCES "movies"("kinopoisk_id") ON DELETE RESTRICT ON UPDATE CASCADE;
