import React, { useState, useEffect } from 'react';
import "./FilmCard.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store"; 
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';

interface FilmProps {
  film: object,
  id?: number,
  name: string | null,
  countries: string[] | string,
  year: number,
  genres: string[],
  enName: string,
  actors: string[],
  producer: string,
  rating: number,
  movieLength: number
  poster: string
}

const FilmCard: React.FC<FilmProps> = ({film, id, name, countries, year, genres, enName, actors, producer, rating, movieLength, poster}) => {
  const dispatch = useDispatch()
  const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value)
  const [isFavourite, setIsFavourite] = useState(favouritesFilms.some(favFilm => favFilm.id === id))

  useEffect(() => {
    setIsFavourite(favouritesFilms.some(favFilm => favFilm.id === id))
  }, [favouritesFilms, id])

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(deleteFavouriteFilm(id))
    } else {
      dispatch(addFavouriteFilm(film))
    }
  }

  return (
    <div>
      <div className='m-2 pl-2 flex flex-row gap-10'>
        <div className='gap-5 flex flex-row w-[70%]'>
          <img src={poster} className='w-20 h-32' />
          <div className=''>
            <h1 className='text-xl font-bold '>{name}</h1>
            <h1 className='text-l font-semibold'>{enName}, {year}, {Math.floor(movieLength / 60)} ч {movieLength - Math.floor(movieLength / 60)*60} мин</h1>
            {/* {countries && <h3 className='text-m font-normal text-gray-400'>Страна: {countries}; Жанр: {genres}; Продюсеры: {producer}</h3>} */}
            <h3 className='text-m font-normal text-gray-400'>Страна: {countries}</h3>
            <h3 className='text-m font-normal text-gray-400'>Жанр: {genres}</h3>
            <h3 className='text-m font-normal text-gray-400'>Продюсеры: {producer}</h3>
            <h2 className='font-normal text-gray-400'>В ролях: {actors}</h2>
          </div>
        </div>
        <h2 className='justify-center items-center flex flex-1 text-[#FFD700]'>{rating}</h2>
        <div>
          { isFavourite 
            ? <FaStar className="cursor-pointer" onClick={handleToggleFavourite}/> 
            : <FaRegStar className='cursor-pointer' onClick={handleToggleFavourite}/> 
          }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FilmCard;