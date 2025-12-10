import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addFavouriteFilm,
  deleteFavouriteFilm,
} from "../../store/FavouriteFilmsSlice";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  deleteFavouriteFilm as deleteFavouriteFilmFromAPI,
  addFavouriteFilm as addFavouriteFilmFormAPI,
  getImages,
  getSimilarMovies,
} from "../../services/apiService";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import TrailerComp from "../../components/TrailerComp/TrailerComp";
import SimilarMovieCard from "../../components/SimilarMovieCard/SimilarMovieCard";
import { Film } from "@/interfaces/IFilm";
import { Image } from "@/interfaces/IImages";
import { SimilarFilm } from "@/interfaces/ISimilarFilm";
import { RootState } from "@/store/store";

const FilmPage = () => {
  const location = useLocation();
  const [film] = useState<Film>(location.state?.film || null);
  const favouritesFilms = useSelector(
    (state: RootState) => state.favouritesFilms.value
  );
  const [isFavourite, setIsFavourite] = useState(
    favouritesFilms.some(
      (favFilm) => favFilm.kinopoisk_id === film?.kinopoisk_id
    )
  );
  const [images, setImages] = useState<Image[]>();
  const [similarMovies, setSimilarMovies] = useState<SimilarFilm[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!film?.kinopoisk_id) {
      console.error("ID фильма отсутствует.");
      return;
    }

    const kinopoiskId = film.kinopoisk_id;

    const loadImages = async () => {
      try {
        if (typeof kinopoiskId === "number") {
          const imagesFromDB = await getImages(kinopoiskId);
          setImages(imagesFromDB);
        } else {
          console.error("ID фильма не является числом.");
        }
      } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
      }
    };

    const loadSimilarMovies = async () => {
      try {
        if (typeof kinopoiskId === "number") {
          const similarMoviesFromDB = await getSimilarMovies(kinopoiskId);
          setSimilarMovies(similarMoviesFromDB);
        } else {
          console.error("ID фильма не является числом.");
        }
      } catch (error) {
        console.error("Ошибка загрузки похожих фильмов:", error);
      }
    };

    loadImages();
    loadSimilarMovies();

    setIsFavourite(
      favouritesFilms.some((favFilm) => favFilm.kinopoisk_id === kinopoiskId)
    );
  }, [film, favouritesFilms]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleToggleFavourite = () => {
    if (!film?.kinopoisk_id) {
      console.error("ID фильма отсутствует");
      return;
    }

    if (isFavourite) {
      dispatch(deleteFavouriteFilm(film.kinopoisk_id));
      deleteFavouriteFilmFromAPI(film.kinopoisk_id);
    } else {
      dispatch(addFavouriteFilm(film));
      addFavouriteFilmFormAPI(film.kinopoisk_id);
    }
    setIsFavourite(!isFavourite);
  };

  const renderInfo = (label: string, value: string | number) =>
    value && (
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>
        <Typography color="textSecondary" fontSize={15}>
          {label}
        </Typography>
        <Typography fontSize={15}>{value || "Не указано"}</Typography>
      </Box>
    );

  const renderPersons = (profession: string, label: string) => {
    const persons = film?.personsList
      .filter((p) => p.profession_text === profession)
      .map((p) => p.name_ru || p.name_en)
      .join(", ");
    return renderInfo(label, persons);
  };

  const pluralizeActors = (n: number) => {
    if (n % 100 >= 11 && n % 100 <= 14) return "актеров";
    const lastDigit = n % 10;
    if (lastDigit === 1) return "актер";
    if (lastDigit >= 2 && lastDigit <= 4) return "актера";
    return "актеров";
  };

  const countActors =
    film?.personsList.filter((p) => p.profession_text === "Актеры").length || 0;

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 10, width: "80%" }}>
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <img
            src={film?.poster_url}
            alt="poster"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          {film?.videos?.length > 0 && (
            <Box>
              <TrailerComp
                previewUrl={images && images.length > 0 ? images[0].url : null}
                videoUrl={film?.videos[0].url}
                site={film?.videos[0].site}
                width="300"
                height="200"
              />
              <Typography variant="h6">{film?.videos[0].name}</Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            {film?.name_ru || film?.name_original} ({film?.year})
            {isFavourite ? (
              <FaStar className="text-4xl p-2" />
            ) : (
              <FaRegStar className="text-4xl p-2" />
            )}
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: 250,
              backgroundColor: "gray",
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "1.2rem",
              "&:hover": { backgroundColor: "gray" },
            }}
            onClick={handleToggleFavourite}
          >
            {isFavourite ? "убрать из избранного" : "Добавить в избранное"}
          </Button>
          <Typography variant="h6" sx={{ mt: 2 }}>
            О фильме
          </Typography>
          {renderInfo("Год производства", film?.year)}
          {renderInfo(
            "Страна",
            film?.countries?.map((c) => c.country).join(", ") || ""
          )}
          {renderInfo(
            "Жанр",
            film?.genres?.map((g) => g.genre).join(", ") || ""
          )}
          {renderPersons("Режиссеры", "Режиссеры")}
          {renderPersons("Художники", "Художники")}
          {renderPersons("Операторы", "Операторы")}
          {renderPersons("Режиссеры дубляжа", "Режиссеры дубляжа")}
          {renderPersons("Продюсеры", "Продюсеры")}
          {renderPersons("Монтажеры", "Монтажеры")}
          {renderPersons("Композиторы", "Композиторы")}
          {renderPersons("Сценаристы", "Сценаристы")}
          {renderPersons("Переводчики", "Переводчикы")}
        </Box>

        <Box sx={{ width: "25%", textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {film?.rating_kinopoisk}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            В главных ролях
          </Typography>
          <Box sx={{ mt: 2, textAlign: "left" }}>
            {film.personsList
              ?.filter((actor) => actor.profession_text === "Актеры")
              .slice(0, 9)
              .map((actor) => (
                <Link
                  key={actor.staff_id}
                  to={`/actor/${actor.staff_id}`}
                  className="flex hover:text-blue-500"
                  state={actor}
                >
                  {actor.name_ru || actor.name_en}
                </Link>
              ))}
          </Box>
          <Link to={`/actorsbyfilm/${film?.kinopoisk_id}`} state={{ film }}>
            <Button sx={{ mt: 2, fontSize: "0.875rem", color: "blue" }}>
              {countActors} {pluralizeActors(countActors)}
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mt: 10 }}>
        <TabsPanel
          images={images}
          description={film?.description}
          videos={film?.videos}
        />
      </Box>

      {similarMovies.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Похожие фильмы
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              padding: 2,
              width: "80%",
            }}
          >
            {similarMovies.map((movie, index) => (
              <SimilarMovieCard
                key={index}
                name={movie?.name_ru}
                posterUrl={movie?.poster_url}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default FilmPage;
