import FilmCard from "../../FilmCard/FilmCard";
import { useLocation } from "react-router-dom";

const FilmPage = () => {
    const location = useLocation();
    const { film } = location.state || {}; 

    const roundToDecimal = (num: number, decimalPlaces: number) => {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }

    console.log(film)
    
    return (
        <div className="mt-[70px]">
            <FilmCard 
                film = {film}
                id = {film.id}
                name = {film.name || film.alternativeName}
                enName = {film.enName}
                countries = {film.countries.map((country) => (country.name)).join(", ")}
                year = {film.year}
                genres = {film.genres.map((genre) => genre.name).slice(0, 2).join(", ")}
                actors = {film.persons
                .filter((person) => person.profession === "актеры")
                .slice(0, 2) 
                .map((person) => person.name)
                .join(", ")}
                rating = {roundToDecimal(film.rating.kp, 1)}
                movieLength = {film.movieLength}
                producer = {film.persons
                .filter((person) => person.profession === "продюсеры") 
                .slice(0, 2) 
                .map((person) => person.name)
                .join(", ")}
                poster={film.poster.url}
            />
        </div>
    );
};

export default FilmPage;