export interface Film {
    id: number | null | undefined;
    name: string | null | undefined;
    alternativeName: string | null | undefined;
    countries: Array<{ name: string }> | null | undefined;
    genres: Array<{ name: string }> | null | undefined;
    year: number | null | undefined;
    enName: string | null | undefined;
    movieLength: number | null | undefined;
    persons: Array<{ id: number; name: string; profession: string }> | null | undefined;
    poster: { url: string; previewUrl: string } | null | undefined;
    rating: { kp: number; } | null | undefined;
  }