import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const url = "https://api.kinopoisk.dev/v1.4/movie";
const KINOPOISK_API_KEY = process.env.KINOPOISK_API_KEY;

const req = async (page) => {
  const params = {
    page,
    limit: 250,
    type: "movie",
  };

  const queryString = new URLSearchParams(params).toString();

  const responseAllFilms = await fetch(`${url}?${queryString}`, {
    headers: {
      accept: "application/json",
      "X-API-KEY": KINOPOISK_API_KEY,
    },
  });

  const { docs: films } = await responseAllFilms.json();

  const filteredFilms = films
    .map((film) => ({
      kinopoisk_id: film.id,
      name_en: film.alternativeName,
      name_original: film.alternativeName,
      name_ru: film.name,
      rating_imdb: film.rating?.imdb,
      rating_kinopoisk: film.rating?.kp,
      rating_age_limits: String(film.ageRating),
      countries: film.countries,
      genres: film.genres,
      persons: film.persons,
      poster_url: film.poster?.url,
      poster_url_preview: film.poster?.previewUrl,
      type: film.type,
      year: film.year,
      movie_length: film.movieLength || film.seriesLength,
      description: film.description || film.shortDescription,
      videos: film.videos,
    }))
    .filter(
      (movie) =>
        movie.poster_url &&
        movie.name_en &&
        movie.name_ru &&
        movie.description &&
        movie.countries &&
        movie.movie_length
    );

  for (const film of filteredFilms) {
    const responseFilm = await fetch(`${url}/${film.kinopoisk_id}`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": KINOPOISK_API_KEY,
      },
    });

    const filmInfo = await responseFilm.json();

    if (filmInfo.persons) {
      film.persons = filmInfo.persons;
    }
  }

  if (filteredFilms) {
    return filteredFilms;
  }

  return [];
};

const fetchFilms = async () => {
  const prisma = new PrismaClient();
  let filmsArraySize = 0;
  let page = 1;

  while (true) {
    const moviesData = await req(page);

    await prisma.movies.createMany({
      data: moviesData,
      skipDuplicates: true,
    });

    if (filmsArraySize > 100) break;
    filmsArraySize += moviesData.length;
    page++;
  }
};

fetchFilms();
