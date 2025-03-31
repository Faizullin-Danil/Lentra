import { RootState } from "@/store/store";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';
import { FaRegStar, FaStar } from "react-icons/fa";
import { deleteFavouriteFilm as deleteFavouriteFilmFromAPI, addFavouriteFilm as addFavouriteFilmFormAPI } from "../../services/apiService"
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import { Link } from 'react-router-dom';
import TrailerComp from "../../components/TrailerComp/TrailerComp"


const FilmPage = () => {
    const location = useLocation();
    const { film } = location.state || {}; 
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value)
    const [isFavourite, setIsFavourite] = useState(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id))
    const dispatch = useDispatch()

    useEffect(() => {
        setIsFavourite(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === film.kinopoisk_id))
    }, [favouritesFilms, film.id])

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

    console.log(film.videos);

    return (
        <div className="mt-[80px] flex flex-col items-center">
            <div className="w-[80%] flex gap-10">
                <div className="w-1/3 flex flex-col gap-5">
                    <img src={film.poster_url} className="w-50 h-70 object-cover" />
                    <TrailerComp videoUrl={film.videos[0].url}/>

                </div>


                <div className="w-1/2 flex flex-col space-y-2">
                    <h1 className="flex items-center gap-4 text-2xl font-bold">
                        {film.name_ru || film.name_original} ({film.year})
                        {isFavourite ? <FaStar className="text-4xl p-2" /> : <FaRegStar className="text-4xl p-2" />}
                    </h1>
                    <Button className="flex w-[250px] cursor-pointer !bg-gray-200 rounded-4xl !text-black text-3xl transition duration-300 hover:!bg-gray-300" onClick={handleToggleFavourite}>
                        {isFavourite 
                            ? <h1 className="flex items-center gap-2">убрать из избранного</h1> 
                            : <h1 className="flex items-center gap-2">Добавить в избранное</h1>}
                    </Button>

                    <h1 className="font-bold text-lg">О фильме</h1>
                    <div className="grid grid-cols-2 text-xs gap-2">
                        <h1 className="text-gray-400">Год производства</h1>
                        <h1>{film.year}</h1>

                        <h1 className="text-gray-400">Страна</h1>
                        <h1>{film.countries.map(c => c.country).join(", ")}</h1>

                        <h1 className="text-gray-400">Жанр</h1>
                        <h1>{film.genres.map(g => g.genre).join(", ")}</h1>

                        <h1 className="text-gray-400">Режиссер</h1>
                        <h1>{film.persons.filter(p => p.profession_text === "Режиссеры").map(p => p.name_ru || p.name_en).join(", ") || "Не указано"}</h1>
                    </div>
                </div>

                <div className="w-1/4 text-center">
                    <h1 className="text-xl font-semibold">{film.rating_kinopoisk}</h1>
                    <h1 className="mt-10 font-bold">В главных ролях</h1>
                    <div className="mt-2 text-start space-y-2">
                        {film.persons
                            .filter(p => p.profession_text === "Актеры")
                            .slice(0, 9)
                            .map(p => (
                                <h1 key={p.staff_id} className="text-sm">{p.name_ru || p.name_en}</h1>
                            ))}
                    </div>
                    <Link to={`/actorsByfilm/${film.kinopoisk_id}`} state={{film}}>
                        <Button className="!text-[12px] !text-blue-600 hover:underline">
                            {film.persons.filter(p => p.profession_text === "Актеры").length} актер(-ов)
                        </Button>
                    </Link>
                    
                </div>
            </div>

            <div className="w-[80%] mt-10">
                <TabsPanel description={film.description} videos={film.videos} />
            </div>
            
        </div>

    );
};

export default FilmPage;
