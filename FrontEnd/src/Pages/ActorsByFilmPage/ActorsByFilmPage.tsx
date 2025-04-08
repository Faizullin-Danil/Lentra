import { Link, useLocation } from "react-router-dom";
import ActorCard from "../../components/ActorCard/ActorCard";
import Box from "@mui/material/Box";



const ActorsByFilmPage = () => {
  const location = useLocation();
  const { film } = location.state || {};


  const actors = film.persons.filter((person) => person.profession_text === "Актеры");
  console.log(actors)

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[81vh]">
      <Box
        className={`flex gap-2 overflow-x-auto whitespace-nowrap p-2 w-full ${actors.length < 5 ? 'justify-center' : ''}`}
      >
        {actors.map((actor) => (
          <Link to={`/actor/${actor.staff_id}`}>
            <ActorCard key={actor.staff_id} name_ru={actor.name_ru} poster_url={actor.poster_url} />
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default ActorsByFilmPage;
