import { Link, useLocation } from "react-router-dom";
import ActorCard from "../../components/ActorCard/ActorCard";
import Box from "@mui/material/Box";
import { Person } from "../../interfaces/IPerson";

const ActorsByFilmPage = () => {
  const location = useLocation();
  const { film } = location.state || {};

  const actors = film.personsList.filter(
    (person: Person) => person.profession_text === "Актеры"
  );

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[81vh]">
      <Box
        className={`flex gap-2 overflow-x-auto whitespace-nowrap p-2 w-full ${
          actors.length < 5 ? "justify-center" : ""
        }`}
      >
        {actors.map((actor: Person) => (
          <Link to={`/actor/${actor.staff_id}`} state={actor}>
            <ActorCard
              key={actor.staff_id}
              name_ru={actor.name_ru}
              poster_url={actor.poster_url}
            />
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default ActorsByFilmPage;
