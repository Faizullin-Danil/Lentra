import "./ListFilms.css"
import FilmCard from '../FilmCard/FilmCard';



const ListFilms = ({films}) => {
  const roundToDecimal = (num: number, decimalPlaces: number) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }
  
  return (
    <div className='flex-1 w-[80%]'>
        {films.map((film, index) => (
          <FilmCard 
            key = {index}
            film = {film}
            id = {film.id}
            name = {film.name || film.alternativeName}
            enName = {film.enName}
            countries = {film.countries.map((country) => (country.name)).join(", ")}
            year = {film.year}
            genres = {film.genres.map((genre: string) => genre.name).slice(0, 2).join(", ")}
            actors = {film.persons
              .filter((person: string) => person.profession === "актеры")
              .slice(0, 2) 
              .map((person: string) => person.name)
              .join(", ")}
            rating = {roundToDecimal(film.rating.kp, 2)}
            movieLength = {film.movieLength}
            producer = {film.persons
              .filter((person: string) => person.profession === "продюсеры") 
              .slice(0, 2) 
              .map((person: string) => person.name)
              .join(", ")}
            poster={film.poster.url}
          />
        ))}
    </div>
  );
};

export default ListFilms;