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

exports.addSimilarMoviesInDB = async (kinopoiskId, similarMovies) => {
    try {
        await prisma.similarmovies.createMany({
            data: similarMovies.map(movie => ({
              film_id: movie.filmId,
              name_ru: movie.nameRu,
              name_en: movie.nameEn,
              name_original: movie.nameOriginal,
              poster_url: movie.posterUrl,
              poster_url_preview: movie.posterUrlPreview,
              relation_type: movie.relationType,
              kinopoisk_id: kinopoiskId
            })),
            skipDuplicates: true, // Пропускает дубликаты по уникальным полям
          });
          
        
    } catch (error) {
        console.error('Ошибка в репозитории похожих в addSimilarMoviesInDB:', error.message);
    }
}

exports.getSimilarMoviesFromDB = async (kinopoisk_id) => {
    try {
        const similarMovies = await prisma.similarmovies.findMany({
            where: { kinopoisk_id: kinopoisk_id }
        })

        return similarMovies
    } catch (error) {
        console.error('Ошибка в репозитории похожтх в getSimilarMoviesFromDB:', error.message);
    }
}