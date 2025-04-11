export interface SimilarFilm {
    film_id: number;
    id: number;
    kinopoisk_id: number;
    name_en: string;
    name_original: string;
    name_ru: string;
    poster_url: string;
    poster_url_preview: string;
    relation_type: 'SIMILAR' | string;  // Допустим, 'SIMILAR' может быть заменен на другие типы в будущем
  }
  