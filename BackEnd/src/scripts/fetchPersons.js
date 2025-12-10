import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const url = "https://api.kinopoisk.dev/v1.4/person";
const KINOPOISK_API_KEY = process.env.KINOPOISK_API_KEY;

const getPersonInfo = async (id) => {
  const responsePerson = await fetch(`${url}/${id}`, {
    headers: {
      accept: "application/json",
      "X-API-KEY": KINOPOISK_API_KEY,
    },
  });

  const person = await responsePerson.json();

  return {
    staff_id: person.id,
    name_en: enName,
    name_ru: name,
    profession_text,
    profession_key,
  };
};

const fetchPersons = async () => {
  const prisma = new PrismaClient();

  const filmsWithPersons = await prisma.movies.findMany({
    select: { persons: true },
  });

  const lastPersonId = await prisma.persons.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  for (const persons of filmsWithPersons) {
    for (const person of persons.persons) {
      const personInfo = getPersonInfo(person.id);

      await prisma.movies.createMany({
        data: moviesData,
        skipDuplicates: true,
      });
    }
  }
};

fetchPersons();
