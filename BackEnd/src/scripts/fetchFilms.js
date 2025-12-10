import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const url = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
const KINOPOISK_API_KEY = process.env.KINOPOISK_API_KEY;

const req = async (page) => {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": KINOPOISK_API_KEY,
    },
  });

  const data = await response.json();
  const films = data.items || [];

  const filteredFilms = films
    .map((film) => ({
      kinopoisk_id: film.kinopoiskId,
      imdb_id: film.imdbId || null,
      name_ru: film.nameRu || null,
      name_en: film.nameEn || null,
      name_original: film.nameOriginal || null,
      rating_kinopoisk: film.ratingKinopoisk || null,
      rating_imdb: film.ratingImdb || null,
      year: film.year || null,
      type: film.type || null,
      countries: film.countries || null,
      genres: film.genres || null,
      poster_url: film.posterUrl || null,
      poster_url_preview: film.posterUrlPreview || null,
    }))
    .filter(
      (movie) =>
        movie.poster_url &&
        (movie.name_en || movie.name_ru || movie.name_original) &&
        movie.countries?.length > 0
    );

  return filteredFilms;
};

const fetchFilms = async () => {
  const prisma = new PrismaClient();
  let filmsArraySize = 0;
  let page = 1;

  while (true) {
    const moviesData = await req(page);

    if (!moviesData.length) break;

    await prisma.movies.createMany({
      data: moviesData,
      skipDuplicates: true,
    });

    filmsArraySize += moviesData.length;
    page++;

    if (filmsArraySize > 100) break;
  }

  console.log(`Загружено фильмов: ${filmsArraySize}`);
  await prisma.$disconnect();
};

fetchFilms().catch((e) => {
  console.error(e);
});
