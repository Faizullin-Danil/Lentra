const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getKinopoiskIdfromDB = async () => {
    try {
        const kinopoiskIds = await prisma.movies.findMany({
            select: { kinopoisk_id: true },
          });

        // console.log(kinopoiskIds);

        return kinopoiskIds
    } catch (error) {
        console.log("Ошибка при получении kinopoisk_id фильмов", error)
    }
}

