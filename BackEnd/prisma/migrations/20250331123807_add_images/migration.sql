-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "kinopoisk_id" INTEGER,
    "url" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
