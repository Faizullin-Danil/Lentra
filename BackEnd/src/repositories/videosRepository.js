const pool = require("../config/db");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllMovies = async () => {
  try {
    return await prisma.movies.findMany();
  } catch (error) {
    console.error("Ошибка при получении фильмов:", error.message);
    throw new Error("Failed to retrieve movies");
  }
};

exports.saveVideos = async (kinopoisk_id, videos) => {
  try {
    const updatedMovie = await prisma.movies.update({
      where: { kinopoisk_id },
      data: { videos: videos },
    });

    return updatedMovie;
  } catch (error) {
    console.error("Ошибка в репозитории видео: ", error.message);
    throw new Error("Failed to save videos in database");
  }
};
