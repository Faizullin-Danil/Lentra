/*
  Warnings:

  - You are about to drop the column `countries` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `imdb_id` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `movie_length` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `persons` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `rating_age_limits` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `rating_imdb` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `rating_kinopoisk` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `similar_kinopoisk_id` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `videos` on the `similarmovies` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `similarmovies` table. All the data in the column will be lost.
  - Added the required column `film_id` to the `similarmovies` table without a default value. This is not possible if the table is not empty.
  - Made the column `kinopoisk_id` on table `similarmovies` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "similarmovies" DROP CONSTRAINT "similarmovies_similar_kinopoisk_id_fkey";

-- DropIndex
DROP INDEX "similarmovies_imdb_id_key";

-- DropIndex
DROP INDEX "similarmovies_kinopoisk_id_key";

-- AlterTable
ALTER TABLE "similarmovies" DROP COLUMN "countries",
DROP COLUMN "description",
DROP COLUMN "genres",
DROP COLUMN "imdb_id",
DROP COLUMN "movie_length",
DROP COLUMN "persons",
DROP COLUMN "rating_age_limits",
DROP COLUMN "rating_imdb",
DROP COLUMN "rating_kinopoisk",
DROP COLUMN "similar_kinopoisk_id",
DROP COLUMN "type",
DROP COLUMN "videos",
DROP COLUMN "year",
ADD COLUMN     "film_id" INTEGER NOT NULL,
ADD COLUMN     "relation_type" TEXT,
ALTER COLUMN "kinopoisk_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "actors" (
    "id" SERIAL NOT NULL,
    "personId" INTEGER NOT NULL,
    "nameRu" TEXT,
    "nameEn" TEXT,
    "sex" TEXT,
    "posterUrl" TEXT,
    "growth" INTEGER,
    "birthday" TIMESTAMP(3),
    "age" INTEGER,
    "birthplace" TEXT,
    "hasAwards" INTEGER,
    "profession" TEXT,
    "facts" JSONB,

    CONSTRAINT "actors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "actors_personId_key" ON "actors"("personId");
