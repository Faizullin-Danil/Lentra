import { Person } from "./IPerson"
import { Video } from "./IVideo"

export interface Film {
  kinopoisk_id: number
  name_ru: string
  name_en: string
  countries: Array<{ name: string }>
  genres: Array<{ name: string }>
  year: number
  name_original: string
  movie_length: number
  persons: Person[]
  poster_url: string
  rating_kinopoisk: number;
  description: string
  imdb_d: string | null | undefined;
  rating_age_limits: string
  rating_imdb: number;
  type: string
  videos:Video[]
  filmId?: number;
  nameRu?: string
  nameEn?: string
}
