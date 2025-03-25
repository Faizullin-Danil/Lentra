import { RootState } from "@/store/store";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';
import { FaRegStar, FaStar } from "react-icons/fa";
import { deleteFavouriteFilm as deleteFavouriteFilmFromAPI, addFavouriteFilm as addFavouriteFilmFormAPI } from "../../services/apiService"


const FilmPage = () => {
    const location = useLocation();
    const { film } = location.state || {}; 
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value)
    const [isFavourite, setIsFavourite] = useState(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id))
    const dispatch = useDispatch()

    useEffect(() => {
        setIsFavourite(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id))
    }, [favouritesFilms, film.id])

    const roundToDecimal = (num: number, decimalPlaces: number) => {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }

    const handleToggleFavourite = () => {
        if (isFavourite) {
            dispatch(deleteFavouriteFilm(film.kinopoisk_id))
            deleteFavouriteFilmFromAPI(film.kinopoisk_id)
            setIsFavourite(false)
        } else {
            dispatch(addFavouriteFilm(film))
            addFavouriteFilmFormAPI(film.kinopoisk_id)
            setIsFavourite(true)
        }
    }

    console.log(film);

    return (
        <div className="mt-[70px] flex justify-center">
            <div className="w-[80%] flex justify-center mt-[27px]">
                <div className="w-[30%] flex flex-col justify-center gap-5">
                    <img src={film.poster_url} className="w-50 h-70 object-cover" />
                    {/* {film.videos.trailers.length > 0 
                    ?   <div className="flex flex-col h-35">
                            <TrailerComp videoUrl={film.videos.trailers[0].url} previewUrl={film.backdrop.previewUrl} /> 
                            <h1>Трейлер</h1>
                        </div>  
                    : <h1>1</h1>} */}
                </div>
                <div className="w-[40%] flex flex-col gap-2">
                    <h1 className="flex gap-14 text-2xl font-bold">{film.name_ru} ({film.year}) 
                        {isFavourite 
                            ? <FaStar className="rounded-4xl text-4xl p-2" />
                            : <FaRegStar className="rounded-4xl text-4xl p-2" />} 
                    </h1>
                    <h1 className="text-xs" style={{ textIndent: '3rem' }}>{film.description}</h1>
                    <Button className="flex w-[250px] cursor-pointer !bg-gray-200 rounded-4xl !text-black text-3xl transition duration-300 hover:!bg-gray-300" onClick={handleToggleFavourite}>
                        {isFavourite 
                            ? <h1 className="flex items-center gap-2">убрать из избранного</h1> 
                            : <h1 className="flex items-center gap-2">Добавить в избранное</h1>
                        }
                    </Button>
                    <h1 className="font-bold text-lg">О фильме</h1>
                    <div className="text-xs flex flex-col gap-2">
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Год производства</h1>
                            <h1 className="w-[70%]">{film.year}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Страна</h1>
                            <h1 className="w-[70%]">{film.countries.map(country => country.country).join(", ")}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Жанр</h1>
                            <h1 className="w-[70%]">{film.genres.map(genre => genre.genre).join(", ")}</h1>
                        </div>

                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Режиссер</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Режиссеры") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Продюсер</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Продюсеры") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Сценарий</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Сценаристы") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Оператор</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Операторы") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Монтаж</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Монтажеры") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Художник</h1>
                            <h1 className="w-[70%]">{film.persons
                                .filter((person) => person.profession_text === "Художники") 
                                .map((person) => person.name_ru || person.name_en)
                                .join(", ") || "Не указано"}
                            </h1>
                        </div>
                        {/* <div className="flex">
                            <h1 className="w-[30%] text-gray-400">Время</h1>
                            <h1 className="w-[70%]">{Math.floor(film.movieLength / 60)} ч {film.movieLength - Math.floor(film.movieLength / 60) * 60} мин</h1>
                        </div> */}
                        
                    </div>
                </div>
                <div className="w-[30%] text-center">
                    <h1 className="text-xl font-semibold">{film.rating_kinopoisk}</h1>
                    <h1 className="mt-[60px] top-20 font-bold">В главных ролях</h1>
                    <div className="flex flex-col ml-29 mt-2 text-start gap-2">
                        {film.persons
                            .filter((person) => person.profession_text === "Актеры")
                            .slice(0, 9)
                            .map((person) => (
                                <h1 key={person.staff_id} className="text-sm">{person.name_ru || person.name_en}</h1>
                            ))}
                    </div>
                    <Button className="!text-[12px] !justify-center !text-blue-600" 
                            disableRipple 
                            sx={{ "&:hover": { backgroundColor: "transparent", textDecoration: "underline"  } }}>
                                {film.persons.filter((person) => person.profession_text === "Актеры").length} актер(-ов)
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default FilmPage;
