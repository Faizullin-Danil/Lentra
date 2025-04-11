import { Film } from "./IFilm"

export interface Actor {
    age: number;
    birthday: string;
    birthplace: string;
    death: string | null;
    deathplace: string | null;
    facts: string[];
    films: Film[];
    growth: number;
    hasAwards: number;
    nameEn: string;
    nameRu: string;
    personId: number;
    posterUrl: string;
    profession: string;
    sex: 'MALE' | 'FEMALE';
    spouses: any[]; 
    webUrl: string;
  }