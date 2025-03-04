export interface Film {
    id: number;
    name: string;
    alternativeName: string;
    countries: Array<{ name: string }>;
    genres: Array<{ name: string }>;
    year: number;
    enName: string;
    movieLength: number;
    persons: Array<{ id: number; name: string; profession: string }>;
    poster: { url: string; previewUrl: string };
    rating: { kp: number; };
  }