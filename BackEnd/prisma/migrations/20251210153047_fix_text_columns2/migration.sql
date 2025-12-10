-- AlterTable
ALTER TABLE "public"."persons" ADD COLUMN     "movie_id" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."persons" ADD CONSTRAINT "persons_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
