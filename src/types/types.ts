export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export enum Status {
  'alive' = 'alive',
  'dead' = 'dead',
  'unknown' = 'unknown',
}
export enum Gender {
  'female' = 'female',
  'male' = 'male',
  'genderless' = 'genderless',
  'unknown' = 'unknown',
}

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
