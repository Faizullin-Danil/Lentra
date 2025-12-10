/*
  Warnings:

  - You are about to drop the column `profession_key` on the `persons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."movies" ALTER COLUMN "imdb_id" SET DATA TYPE TEXT,
ALTER COLUMN "rating_imdb" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "rating_kinopoisk" SET DATA TYPE DECIMAL(4,2),
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."persons" DROP COLUMN "profession_key",
ADD COLUMN     "birthPlace" TEXT;
