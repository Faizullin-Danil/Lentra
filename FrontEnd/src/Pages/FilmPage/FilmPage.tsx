import { RootState } from "@/store/store";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useParams } from "react-router-dom";
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';
import { FaRegStar, FaStar } from "react-icons/fa";
import { deleteFavouriteFilm as deleteFavouriteFilmFromAPI, addFavouriteFilm as addFavouriteFilmFormAPI, getImages, getSimilarMovies, getSimilarMovieFromAPI } from "../../services/apiService";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import TrailerComp from "../../components/TrailerComp/TrailerComp";
import SimilarMovieCard from "../../components/SimilarMovieCard/SimilarMovieCard";


const FilmPage = () => {
    const { kinopoisk_id } = useParams();  // Получаем ID фильма из URL
    const location = useLocation();
    const [film, setFilm] = useState(location.state?.film || null);
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
    const [isFavourite, setIsFavourite] = useState(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id));
    const [images, setImages] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const dispatch = useDispatch();

    console.log(kinopoisk_id)
    
    useEffect(() => {
        console.log("hf,")
        // Загружаем информацию о фильме по kinopoiskId, если film не передан через location.state
        const loadFilmData = async () => {
            if (!film && kinopoisk_id) {
                // Сделать запрос к API для получения фильма по ID
                // Здесь вы можете добавить свой запрос
                const filmData = await getSimilarMovieFromAPI(kinopoisk_id);
                setFilm(filmData);  // Устанавливаем состояние фильма
            }
        };
        loadFilmData();
    }, [kinopoisk_id]); 

    useEffect(() => {
        const loadImages = async () => {
            try {
                const imagesFromDB = await getImages(film.kinopoisk_id);
                setImages(imagesFromDB);
            } catch (error) {
                console.error("Ошибка загрузки изображения:", error);
            }
        };
        loadImages();

        const loadSimilarMovies = async () => {
            try {
                const similarMoviesFromDB = await getSimilarMovies(film.kinopoisk_id);
                setSimilarMovies(similarMoviesFromDB);
            } catch (error) {
                console.error("Ошибка загрузки изображения:", error);
            }
        };
        loadSimilarMovies()

        setIsFavourite(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id));
    }, []);

    // console.log("фильм:", film)


    const handleToggleFavourite = () => {
        if (isFavourite) {
            dispatch(deleteFavouriteFilm(film.kinopoisk_id));
            deleteFavouriteFilmFromAPI(film.kinopoisk_id);
        } else {
            dispatch(addFavouriteFilm(film));
            addFavouriteFilmFormAPI(film.kinopoisk_id);
        }
        setIsFavourite(!isFavourite);
    };

    const renderInfo = (label: string, value: string) => (
        <div className="grid grid-cols-2 text-xs gap-2">
            <h1 className="text-gray-400">{label}</h1>
            <h1>{value || "Не указано"}</h1>
        </div>
    );

    const renderPersons = (profession: string, label: string) => {
        const persons = film.persons.filter(p => p.profession_text === profession).map(p => p.name_ru || p.name_en).join(", ");
        return renderInfo(label, persons);
    };

    const pluralizeActors = (n: number) => {
        if (n % 100 >= 11 && n % 100 <= 14) return 'актеров';
        const lastDigit = n % 10;
        if (lastDigit === 1) return 'актер';
        if (lastDigit >= 2 && lastDigit <= 4) return 'актера';
        return 'актеров';
    };

    const countActors = film.persons.filter(p => p.profession_text === "Актеры").length
      

    return (
        <div className="mt-[50px] flex flex-col items-center">
            <div className="w-[80%] flex gap-10">
                <div className="w-[25%] flex flex-col gap-5">
                    <img src={film.poster_url} className="w-80 h-120 object-cover" />
                    {film.videos.length > 0 && (
                        <div>
                            <TrailerComp 
                                previewUrl={images.length > 0 ? images[0].url : "https://example.com/default.jpg"} 
                                videoUrl={film.videos[0].url} 
                                site={film.videos[0].site}
                                width="300" height="200" 
                            />
                            <h1>{film.videos[0].name}</h1>
                        </div>
                    )}
                </div>

                <div className="w-[50%] flex flex-col space-y-2 gap-3">
                    <h1 className="flex items-center gap-4 text-2xl font-bold">
                        {film.name_ru || film.name_original} ({film.year})
                        {isFavourite ? <FaStar className="text-4xl p-2" /> : <FaRegStar className="text-4xl p-2" />}
                    </h1>
                    <Button className="flex w-[250px] cursor-pointer !bg-gray-200 rounded-4xl !text-black text-3xl transition duration-300 hover:!bg-gray-300" onClick={handleToggleFavourite}>
                        {isFavourite ? "убрать из избранного" : "Добавить в избранное"}
                    </Button>
                    <h1 className="font-bold text-lg">О фильме</h1>
                    {renderInfo("Год производства", film.year)}
                    {renderInfo("Страна", film.countries.map(c => c.country).join(", "))}
                    {renderInfo("Жанр", film.genres.map(g => g.genre).join(", "))}
                    {renderPersons("Режиссеры", "Режиссер")}
                    {renderPersons("Художники", "Художник")}
                    {renderPersons("Операторы", "Оператор")}
                    {renderPersons("Режиссеры дубляжа", "Режиссер дубляжа")}
                    {renderPersons("Продюсеры", "Продюсер")}
                    {renderPersons("Монтажеры", "Монтажер")}
                    {renderPersons("Композиторы", "Композитор")}
                    {renderPersons("Сценаристы", "Сценарист")}
                    {renderPersons("Переводчики", "Переводчик")}
                </div>

                <div className="w-[25%] text-center">
                    <h1 className="text-xl font-semibold">{film.rating_kinopoisk}</h1>
                    <h1 className="mt-10 font-bold">В главных ролях</h1>
                    <div className="mt-2 text-start space-y-2">
                        {film.persons.filter(actor => actor.profession_text === "Актеры").slice(0, 9).map(actor => (
                            <Link to={`/actor/${actor.staff_id}`}>
                                <h1 key={actor.staff_id} className="text-sm hover:text-blue-600">{actor.name_ru || actor.name_en}</h1>
                            </Link>
                        ))}
                    </div>
                    <Link to={`/actorsbyfilm/${film.kinopoisk_id}`} state={{film}}>
                        <button className="text-[12px] text-blue-600 hover:cursor-pointer hover:underline">
                            {countActors} {pluralizeActors(countActors)}
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-[80%] mt-10">
                <TabsPanel images={images} description={film.description} videos={film.videos} />
            </div>
            <h1 className="text-xl text-left">Похожие фильмы</h1>
            <div className="w-[80%] flex flex-row">
                <Box className={`flex gap-2 overflow-x-auto whitespace-nowrap p-2 w-full ${similarMovies.length < 10 ? 'justify-center' : ''}`}>
                    {similarMovies.map((movie, index) => (
                        <SimilarMovieCard kinopoiskId={movie?.film_id} key={index} name={movie?.name_ru} posterUrl={movie?.poster_url}/>
                    ))}
                </Box>
            </div>

        </div>
    );
};

export default FilmPage;
