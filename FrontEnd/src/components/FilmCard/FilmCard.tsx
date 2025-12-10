import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { addFavouriteFilm, deleteFavouriteFilm } from '../../store/FavouriteFilmsSlice';
import { Link } from 'react-router-dom';
import { deleteFavouriteFilm as deleteFavouriteFilmFromAPI, addFavouriteFilm as addFavouriteFilmFormAPI } from "../../services/apiService";
import { Box, Skeleton, Typography } from '@mui/material';
import { useState } from 'react';

interface FilmProps {
  film: object,
  id: number,
  name: string | null,
  countries: string[] | string,
  year: number,
  genres: string,
  enName: string,
  actors: string,
  producer: string,
  rating: number,
  movieLength: number
  poster: string
}

const FilmCard: React.FC<FilmProps> = ({film, id, name, countries, year, genres, enName, actors, producer, rating, movieLength, poster}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);

  const isFavourite = favouritesFilms.some(favFilm => favFilm.kinopoisk_id === id);

  const formattedMovieLength = movieLength < 60
    ? `${movieLength} мин`
    : `${Math.floor(movieLength / 60)} ч ${movieLength % 60} мин`;

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(deleteFavouriteFilm(id));
      deleteFavouriteFilmFromAPI(id);
    } else {
      dispatch(addFavouriteFilm(film));
      addFavouriteFilmFormAPI(id);
    }
  };

  return (
    <Box>
      {!imageLoaded && (<Skeleton variant="rectangular" width='100%' height={128} animation="wave" className="rounded-xl mb-1"/>)}

      <Box style={{ display: imageLoaded ? 'flex' : 'none' }} className='m-2 p-5 flex flex-row gap-10 duration-300 hover:bg-gray-100 hover:rounded-4xl'>
        <Link to={`/film/${id}`} state={{film}} className='flex gap-5 w-[100%]'>
          <img
            src={poster}
            alt={name || enName}
            className='w-25 h-40'
            onLoad={() => setImageLoaded(true)} />
          <Box className="w-[60%]">
            <Typography className='text-xl font-bold'>{name || enName}</Typography>
            <Typography className='text-l font-semibold'>
              {enName ? `${enName}, ` : ""}{year}{movieLength !== null ? `, ${formattedMovieLength}` : ""}
            </Typography>
            <Typography className='text-m font-normal text-gray-400'>Страна: {countries}</Typography>
            <Typography className='text-m font-normal text-gray-400 flex gap-1'>Жанр: {genres}</Typography>
            {producer.length > 0 ? <Typography className='font-normal text-gray-400'>Продюсер: {producer}</Typography> : <Typography className='font-normal text-gray-400'>Продюсер: не указано</Typography>}
            {actors.length > 0 ? <Typography className='font-normal text-gray-400'>В ролях: {actors}</Typography> : <Typography className='font-normal text-gray-400'>В ролях: не указано</Typography>}
          </Box>
          <Typography className=' justify-center items-center flex flex-1 !text-black'>{rating}</Typography>
        </Link>

        <Box>
          {isFavourite
            ? <FaStar className="cursor-pointer bg-gray-200 rounded-4xl text-3xl p-2 transition duration-300 hover:bg-gray-300 " onClick={handleToggleFavourite} />
            : <FaRegStar className='cursor-pointer bg-gray-200 rounded-4xl text-3xl p-2 transition duration-300 hover:bg-gray-300' onClick={handleToggleFavourite} />
          }
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default FilmCard;
