-- AlterTable
ALTER TABLE "favouritesmovies" ADD COLUMN     "description" TEXT,
ADD COLUMN     "movie_length" INTEGER,
ADD COLUMN     "rating_age_limits" TEXT,
ADD COLUMN     "videos" JSONB;
