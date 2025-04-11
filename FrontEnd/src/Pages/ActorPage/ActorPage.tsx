import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActor } from "../../services/apiService";
import { CircularProgress } from '@mui/material';
import { Actor } from "../../interfaces/IActor";

const ActorPage = () => {
    const { actor_id } = useParams(); 
    const [actor, setActor] = useState<Actor | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadActor = async () => {
            if (!actor_id) {
                console.error("ID актера не найден");
                return;
            }

            setIsLoading(true);
            try {
                const aboutActor = await getActor(actor_id); 
                setActor(aboutActor);
            } catch (error) {
                console.error("Ошибка загрузки данных об актере:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadActor();
    }, [actor_id]);

    const pluralizeYears = (n: number) => {
        if (n % 100 >= 11 && n % 100 <= 14) return 'лет';
        const lastDigit = n % 10;
        if (lastDigit === 1) return 'год';
        if (lastDigit >= 2 && lastDigit <= 4) return 'года';
        return 'лет';
    };

    console.log(actor);
      
    return (
        <div className="flex flex-col items-center">
            {isLoading ? (
                <div className="flex items-center justify-center h-[80vh] w-full ">
                    <CircularProgress className="!text-black"/>
                </div>
            ) : (
                <div className="w-[80%] flex gap-10">
                    <div className="w-[25%] flex flex-col gap-5">
                        <img src={actor?.posterUrl} className="w-80 h-120 object-cover" />
                    </div>

                    <div className="w-[50%] flex flex-col space-y-2 gap-3">
                        <h1 className="flex items-center gap-4 text-2xl font-bold">
                            {actor?.nameRu || actor?.nameEn}
                        </h1>
                        <h1 className="font-bold text-lg">Об актёре</h1>
                        <h1>Профессия: {actor?.profession}</h1>
                        <h1>
                            Дата рождения: {actor?.birthday}{`, ${actor?.age} ${pluralizeYears(actor?.age)}`}
                        </h1>
                        <h1>Место рождения: {actor?.birthplace}</h1>
                        <h1>Награды: {actor?.hasAwards}</h1>
                    </div>

                    <div className="w-[25%] text-center">
                        <h1 className="mt-10 font-bold">Фильмы:</h1>
                        <div className="mt-2 text-start space-y-2">
                        {actor?.films
                            .filter((film, index, self) =>
                                index === self.findIndex(f => f.filmId === film.filmId)
                            )
                            .slice(0, 9)
                            .map(film => (
                                <h1 key={film.filmId} className="text-sm">
                                    {film.nameRu || film.nameEn}
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActorPage;
