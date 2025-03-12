import "./ListFilms.css"
import FilmCard from '../FilmCard/FilmCard';
import React from "react";
import { Film } from "@/interfaces/Ifilm";

interface ListFilmProps {
  films: Film[];
}


const ListFilms: React.FC<ListFilmProps> = ({ films }) => {
  const roundToDecimal = (num: number, decimalPlaces: number) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  };

  return (
    <div className="w-[70%]">
      {films.map((film, index) => (
        <FilmCard
          key={index}
          film={film}
          id={film.kinopoiskId}
          name={film.nameRu}
          enName={film.nameOriginal}
          countries={film.countries?.length > 0 ? film.countries.map((country) => country.country).join(", ") : "Не указано"}
          year={film.year}
          genres={film.genres?.length > 0 ? film.genres?.map((genre) => genre.genre).join(", ") : <h1>не указано</h1>}
          actors={
            film.persons
              ?.filter((person) => person.professionText === "Актеры")
              .slice(0, 2)
              .map((person) => person.nameRu)
              .join(", ")
          }
          rating={film.ratingKinopoisk}
          movieLength={film.movieLength}
          producer={
            film.persons
              ?.filter((person) => person.professionText === "Продюсеры")
              .slice(0, 2)
              .map((person) => person.nameRu !== '' ? person.nameRu : person.nameEn)
              .join(", ")
          }
          poster={film.posterUrl}
        />
      ))}
    </div>
  );
};

export default ListFilms