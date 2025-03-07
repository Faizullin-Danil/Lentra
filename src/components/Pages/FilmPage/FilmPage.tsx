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
        <div className="mt-[70px] flex w-[80%] justify-center">
            {/* <FilmCard 
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
            /> */}
            <div className="flex ">
                <div className="w-[30%]">
                    <img src={film.poster.url} className='w-20 h-32' />
                </div>
                <div className="w-[40%]">
                    <h1>{film.name}</h1>
                </div>
                <div className="w-[30%]">
                    <h1>{film.rating.kp}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default FilmPage;