import "./ListFilms.css";
import FilmCard from '../FilmCard/FilmCard';
import React from "react";
import { Film } from "@/interfaces/IFilm";
import Pagination from "@mui/material/Pagination";

interface ListFilmProps {
  films: Film[];
}

const ListFilms: React.FC<ListFilmProps> = ({ films }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const filmsPerPage = 20;

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
  const totalPages = Math.ceil(films.length / filmsPerPage);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500); // Ждем, чтобы не было резкого мигания
  };

  return (
    <div className="w-[70%] flex flex-col gap-1">
      <div className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}>
        {currentFilms.map((film, index) => (
          <FilmCard
            key={index}
            film={film}
            id={film.kinopoisk_id}
            name={film.name_ru}
            enName={film.name_original}
            countries={film.countries?.length > 0 ? film.countries.map((country) => country.country).join(", ") : "Не указано"}
            year={film.year}
            genres={film.genres?.length > 0 ? film.genres?.map((genre) => genre.genre).join(", ") : "Не указано"}
            actors={
              film.persons
                ?.filter((person) => person.profession_text === "Актеры")
                .slice(0, 2)
                .map((person) => person.name_ru)
                .join(", ")
            }
            rating={film.rating_kinopoisk}
            movieLength={film.movie_length}
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

      {films.length > filmsPerPage && (
        <Pagination
          className="flex justify-center my-2"
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      )}
    </div>
  );
};

export default ListFilms;
