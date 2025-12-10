const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.saveMovie = async (movieData) => {
  const {
    imdbId,
    kinopoiskId,
    nameRu,
    nameOriginal,
    nameEn,
    countries,
    genres,
    posterUrl,
    posterUrlPreview,
    ratingImdb,
    ratingKinopoisk,
    type,
    year,
    filmLength,
    description,
    ratingAgeLimits,
  } = movieData;

  try {
    await prisma.movies.upsert({
      where: { kinopoisk_id: kinopoiskId },
      update: {},
      create: {
        imdb_id: imdbId,
        kinopoisk_id: kinopoiskId,
        name_ru: nameRu,
        name_original: nameOriginal,
        name_en: nameEn,
        countries,
        genres,
        poster_url: posterUrl,
        poster_url_preview: posterUrlPreview,
        rating_imdb: ratingImdb,
        rating_kinopoisk: ratingKinopoisk,
        type,
        year,
        movie_length: filmLength,
        description,
        rating_age_limits: ratingAgeLimits,
      },
    });
  } catch (error) {
    console.error("Ошибка при вставке в базу данных:", error.message);
    throw new Error("Failed to save movie in database");
  }
};

exports.getAllMovies = async () => {
  try {
    return await prisma.movies.findMany();
  } catch (error) {
    console.error(
      "Ошибка при получении фильмов из базы данных:",
      error.message
    );
    throw new Error("Failed to retrieve movies from database");
  }
};
