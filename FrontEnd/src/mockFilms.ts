const mockFilms = [
  {
    id: 1,
    name: "Начало",
    alternativeName: "Inception",
    enName: "Inception",
    countries: [{ name: "США" }, { name: "Канада" }],
    year: 2010,
    genres: [{ name: "фантастика" }, { name: "боевик" }],
    persons: [
      { name: "Леонардо ДиКаприо", profession: "актеры" },
      { name: "Джозеф Гордон-Левитт", profession: "актеры" },
      { name: "Кристофер Нолан", profession: "продюсеры" }
    ],
    rating: { kp: 8.7 },
    movieLength: 148,
    poster: { url: "https://example.com/inception.jpg" }
  },
  {
    id: 2,
    name: "Интерстеллар",
    alternativeName: "Interstellar",
    enName: "Interstellar",
    countries: [{ name: "США" }, { name: "Канада" }],
    year: 2014,
    genres: [{ name: "фантастика" }, { name: "драма" }],
    persons: [
      { name: "Мэттью МакКонахи", profession: "актеры" },
      { name: "Энн Хэтэуэй", profession: "актеры" },
      { name: "Кристофер Нолан", profession: "продюсеры" }
    ],
    rating: { kp: 8.6 },
    movieLength: 169,
    poster: { url: "https://example.com/interstellar.jpg" }
  },
  {
    id: 3,
    name: "Темный рыцарь",
    alternativeName: "The Dark Knight",
    enName: "The Dark Knight",
    countries: [{ name: "США" }],
    year: 2008,
    genres: [{ name: "боевик" }, { name: "триллер" }],
    persons: [
      { name: "Кристиан Бэйл", profession: "актеры" },
      { name: "Хит Леджер", profession: "актеры" },
      { name: "Кристофер Нолан", profession: "продюсеры" }
    ],
    rating: { kp: 8.5 },
    movieLength: 152,
    poster: { url: "https://example.com/darkknight.jpg" }
  },
  {
    id: 4,
    name: "Великая стена",
    alternativeName: "The Great Wall",
    enName: "The Great Wall",
    countries: [{ name: "Китай" }, { name: "США" }],
    year: 2016,
    genres: [{ name: "фэнтези" }, { name: "боевик" }],
    persons: [
      { name: "Мэтт Дэймон", profession: "актеры" },
      { name: "Тиан Цзин", profession: "актеры" }
    ],
    rating: { kp: 5.8 },
    movieLength: 103,
    poster: { url: "https://example.com/greatwall.jpg" }
  },
  {
    id: 5,
    name: "Гудбай, Германия!",
    alternativeName: "Bye Bye Germany",
    enName: "Es war einmal in Deutschland",
    countries: [{ name: "Германия" }],
    year: 2017,
    genres: [{ name: "драма" }, { name: "комедия" }],
    persons: [
      { name: "Мориц Бляйбтрой", profession: "актеры" }
    ],
    rating: { kp: 6.4 },
    movieLength: 102,
    poster: { url: "https://example.com/byegermany.jpg" }
  },
  {
    id: 6,
    name: "Кодовое имя: Бульгария",
    alternativeName: "Code Name: Bulgaria",
    enName: "Code Name: Bulgaria",
    countries: [{ name: "Болгария" }],
    year: 2015,
    genres: [{ name: "боевик" }, { name: "триллер" }],
    persons: [
      { name: "Димитр Иванов", profession: "актеры" }
    ],
    rating: { kp: 6.0 },
    movieLength: 115,
    poster: { url: "https://example.com/codenamebulgaria.jpg" }
  },
  {
    id: 7,
    name: "Звуки музыки",
    alternativeName: "The Sound of Music",
    enName: "The Sound of Music",
    countries: [{ name: "Австрия" }],
    year: 1965,
    genres: [{ name: "мюзикл" }, { name: "драма" }],
    persons: [
      { name: "Джули Эндрюс", profession: "актеры" },
      { name: "Кристофер Пламмер", profession: "актеры" }
    ],
    rating: { kp: 8.1 },
    movieLength: 174,
    poster: { url: "https://example.com/soundofmusic.jpg" }
  },
  {
    id: 8,
    name: "Красавица и чудовище",
    alternativeName: "Beauty and the Beast",
    enName: "Beauty and the Beast",
    countries: [{ name: "Венгрия" }],
    year: 2014,
    genres: [{ name: "фэнтези" }, { name: "мелодрама" }],
    persons: [
      { name: "Леа Сейду", profession: "актеры" },
      { name: "Винсан Кассель", profession: "актеры" }
    ],
    rating: { kp: 6.8 },
    movieLength: 112,
    poster: { url: "https://example.com/beautyandbeast.jpg" }
  }
];

export default mockFilms;
