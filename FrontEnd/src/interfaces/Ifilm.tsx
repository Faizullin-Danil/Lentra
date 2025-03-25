export interface Film {
  kinopoiskId: number | null | undefined;
  nameRu: string | null | undefined;
  countries: Array<{ name: string }> | null | undefined;
  genres: Array<{ name: string }> | null | undefined;
  year: number | null | undefined;
  nameOriginal: string | null | undefined;
  movieLength: number | null | undefined;
  persons: Array<{ id: number; name: string; profession: string }> | null | undefined;
  posterUrl: { url: string; previewUrl: string } | null | undefined;
  ratingKinopoisk: { kp: number; } | null | undefined;
}