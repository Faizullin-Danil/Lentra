import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const url = "https://kinopoiskapiunofficial.tech/api/v1/staff";
const KINOPOISK_API_KEY = process.env.KINOPOISK_API_KEY;

const getPersonInfo = async (id, movie_id) => {
  const responsePersons = await fetch(`${url}?filmId=${id}`, {
    headers: {
      accept: "application/json",
      "X-API-KEY": KINOPOISK_API_KEY,
    },
  });

  const persons = await responsePersons.json();

  return persons.map((person) => ({
    staff_id: person.staffId,
    kinopoisk_id: id,
    name_en: person.nameEn,
    name_ru: person.nameRu,
    description: person.description,
    poster_url: person.posterUrl,
    profession_text: person.professionText,
    movie_id,
  }));
};
const fetchPersons = async () => {
  const prisma = new PrismaClient();

  const filmsWithPersons = await prisma.movies.findMany({
    select: { kinopoisk_id: true, persons: true, id: true },
  });

  const filterFilmsWithPersons = filmsWithPersons.filter(
    (film) => !film.persons
  );

  for (const { id, kinopoisk_id } of filterFilmsWithPersons) {
    const personsByMovie = await getPersonInfo(kinopoisk_id, id);

    await prisma.persons.createMany({
      data: personsByMovie,
      skipDuplicates: true,
    });

    await prisma.movies.update({
      where: { id },
      data: {
        persons: true,
      },
    });
  }
};

fetchPersons();
