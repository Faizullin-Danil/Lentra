const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.savePerson = async (personData) => {
  const { staffId, kinopoiskId, nameRu, nameEn, description, posterUrl, professionText, professionKey } = personData;

  try {
    await prisma.persons.upsert({
      where: { staff_id: staffId },
      update: {},
      create: {
        staff_id: staffId,
        kinopoisk_id: kinopoiskId,
        name_en: nameEn || null,
        name_ru: nameRu || null,
        description: description || null,
        poster_url: posterUrl || null,
        profession_text: professionText || null,
        profession_key: professionKey || null,
      },
    });
  } catch (error) {
    console.error('Ошибка при вставке в базу данных отношение persons:', error.message);
    throw new Error('Failed to save person in database');
  }
};

exports.getPersonsByKinopoiskId = async (kinopoiskId) => {
    try {
      const persons = await prisma.persons.findMany({
        where: { kinopoisk_id: kinopoiskId },
      });
      return persons;
    } catch (error) {
      console.error('Ошибка при получении персон по kinopoisk_id:', error.message);
      throw new Error('Failed to retrieve persons from database');
    }
  };
  
