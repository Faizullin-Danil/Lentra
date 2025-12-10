const axios = require("axios");
const imagesRepository = require("../repositories/imagesRepository");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

exports.fetchAndSaveImagesByMovies = async () => {
  try {
    const kinopoiskIds = await imagesRepository.getKinopoiskIdfromDB();

    const kinopoiskIdsArray = kinopoiskIds.map((movie) => movie.kinopoisk_id);

    for (const kinopoiskId of kinopoiskIdsArray) {
      try {
        const response = await axios.get(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}/images?type=STILL&page=1`,
          {
            headers: {
              "X-API-KEY": API_KEY,
            },
          }
        );
        await imagesRepository.addImagesInDB(kinopoiskId, response.data.items);
      } catch (error) {
        console.error(
          "Ошибка в цикле сервиса images в fetchAndSaveImagesByMovies:",
          error.message
        );
      }
    }

    return "success";
  } catch (error) {
    console.log("Ошибка в сервисе images в fetchAndSaveImagesByMovies", error);
  }
};

exports.getImages = async (kinopoisk_id) => {
  try {
    return await imagesRepository.getImagesFromDB(kinopoisk_id);
  } catch (error) {
    console.log("Ошибка в сервисе images в getImages", error);
  }
};
