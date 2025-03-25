import React, { useState, useEffect } from 'react';
import "./FilmCard.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store"; 
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';
import { Link } from 'react-router-dom';
import { deleteFavouriteFilm as deleteFavouriteFilmFromAPI, addFavouriteFilm as addFavouriteFilmFormAPI } from "../../services/apiService"


interface FilmProps {
  film: object,
  id?: number,
  name: string | null,
  countries: string[] | string,
  year: number,
  genres: string,
  enName: string,
  actors: string,
  producer: string,
  rating: number,
  movieLength: number
  poster: string | null
}

const FilmCard: React.FC<FilmProps> = ({film, id, name, countries, year, genres, enName, actors, producer, rating, movieLength, poster}) => {
  const dispatch = useDispatch()
  const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value)
  const [isFavourite, setIsFavourite] = useState(favouritesFilms.some(favFilm => favFilm.kinopoisk_id === id))
  console.log(isFavourite)

  const formattedMovieLength = movieLength < 60 
  ? `${movieLength} мин` 
  : `${Math.floor(movieLength / 60)} ч ${movieLength % 60} мин`;
  
  // useEffect(() => {
  //   setIsFavourite(favouritesFilms.some(favFilm => favFilm.kinopoiskId === id))
  // }, [favouritesFilms, id])

  const handleToggleFavourite = () => {
    if (isFavourite) {
        dispatch(deleteFavouriteFilm(id))
        deleteFavouriteFilmFromAPI(id)
        setIsFavourite(false)
      } else {
        dispatch(addFavouriteFilm(film))
        addFavouriteFilmFormAPI(id)
        setIsFavourite(true)
    }
  }

  return (
    <div>
      <div className='m-2 p-5 flex flex-row gap-10 
                      transition duration-300 hover:bg-gray-100 hover: rounded-4xl'>
        <Link to={`/film/${id}`} state={{film}} className='flex gap-5 w-[70%]'>
          <img src={poster} className='w-20 h-32' />
          <div className='cursor-pointer'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <h1 className='text-l font-semibold'>
              {enName ? `${enName}, ` : ""}{year}{movieLength !== null ? `, ${formattedMovieLength}` : ""}
            </h1>
            <h3 className='text-m font-normal text-gray-400'>Страна: {countries}</h3>
            <h3 className='text-m font-normal text-gray-400 flex gap-1'>Жанр: {genres}</h3>
            {producer.length > 0 ? <h1 className='font-normal text-gray-400'>Продюсер: {producer}</h1> : <h1 className='font-normal text-gray-400'>Продюсер: не указано</h1>}
            {actors.length > 0 ? <h1 className='font-normal text-gray-400'>В ролях: {actors}</h1> : <h1 className='font-normal text-gray-400'>В ролях: не указано</h1>}
          </div>
        </Link>

        <h2 className='cursor-default justify-center items-center flex flex-1 text-[#FFD700]'>{rating}</h2>
        <div>
          {isFavourite
            ? <FaStar className="cursor-pointer bg-gray-200 rounded-4xl text-3xl p-2 transition duration-300 hover:bg-gray-300" onClick={handleToggleFavourite} />
            : <FaRegStar className='cursor-pointer bg-gray-200 rounded-4xl text-3xl p-2 transition duration-300 hover:bg-gray-300' onClick={handleToggleFavourite} />
          }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FilmCard;