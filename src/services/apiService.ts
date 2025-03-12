// fetchFilms запрос
export const fetchFilms = async () => {
    try {
      const response = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=2", {
        method: "GET",
        headers: {
          "X-API-KEY": "2695d350-4670-46ae-a005-dd42d5243474"
        }
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке данных фильма:", error);
      throw error;
    }
  };
  
export const fetchPersons = async (id: number) => {
  try {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "2695d350-4670-46ae-a005-dd42d5243474"
      }
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке данных персон:", error);
    throw error;
  }
};
  