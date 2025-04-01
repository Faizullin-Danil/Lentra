const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getKinopoiskIdfromDB = async () => {
    try {
        const kinopoiskIds = await prisma.movies.findMany({
            select: { kinopoisk_id: true },
          });

        return kinopoiskIds
    } catch (error) {
        console.log("Ошибка при получении kinopoisk_id фильмов", error)
    }
}

exports.addImagesInDB = async (kinopoiskId, images) => {
    try {
        console.log(images)

        await prisma.images.createMany({
            data: images.map((img) => ({
                kinopoisk_id: kinopoiskId,
                url: img.imageUrl,
            })),
          });
        
    } catch (error) {
        console.error('Ошибка в репозитории images в addImagesInDB:', error.message);
    }
}


exports.getImagesFromDB = async (kinopoisk_id) => {
    try {
        const images = await prisma.images.findMany({
            where: { kinopoisk_id: kinopoisk_id }
        })

        return images
    } catch (error) {
        console.error('Ошибка в репозитории images в getImagesFromDB:', error.message);
    }
}

