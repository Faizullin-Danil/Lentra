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
          id={film.kinopoisk_id}
          name={film.name_ru}
          enName={film.name_original}
          countries={film.countries?.length > 0 ? film.countries.map((country) => country.country).join(", ") : "Не указано"}
          year={film.year}
          genres={film.genres?.length > 0 ? film.genres?.map((genre) => genre.genre).join(", ") : <h1>не указано</h1>}
          actors={
            film.persons
              ?.filter((person) => person.profession_text === "Актеры")
              .slice(0, 2)
              .map((person) => person.name_ru)
              .join(", ")
          }
          rating={film.ratingKinopoisk}
          movieLength={film.movieLength}
          producer={
            film.persons
              ?.filter((person) => person.profession_text === "Продюсеры")
              .slice(0, 2)
              .map((person) => person.name_ru !== '' ? person.name_ru : person.name_en)
              .join(", ")
          }
          poster={film.poster_url}
        />
      ))}
    </div>
  );
};

export default ListFilms