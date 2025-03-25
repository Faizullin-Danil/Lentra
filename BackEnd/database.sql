CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    imdb_id VARCHAR(20) UNIQUE,
    kinopoisk_id INTEGER UNIQUE,
    name_en TEXT,
    name_original TEXT,
    name_ru TEXT,
    countries JSONB,
    genres JSONB,
    persons JSONB,
    poster_url TEXT,
    poster_url_preview TEXT,
    rating_imdb DECIMAL(3,1),
    rating_kinopoisk DECIMAL(3,1),
    type VARCHAR(10),
    year INTEGER
);

CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER UNIQUE NOT NULL,
    kinopoisk_id INTEGER,
    name_en TEXT,
    name_ru TEXT,
    description TEXT,
    poster_url TEXT,
    profession_text TEXT,
    profession_key VARCHAR(50)
);

CREATE TABLE favouritesMovies (
    id SERIAL PRIMARY KEY,
    imdb_id VARCHAR(20) UNIQUE,
    kinopoisk_id INTEGER UNIQUE,
    name_en TEXT,
    name_original TEXT,
    name_ru TEXT,
    countries JSONB,
    genres JSONB,
    persons JSONB,
    poster_url TEXT,
    poster_url_preview TEXT,
    rating_imdb DECIMAL(3,1),
    rating_kinopoisk DECIMAL(3,1),
    type VARCHAR(10),
    year INTEGER
);


