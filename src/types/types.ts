export type Character = {
  id: number;
  name: string;
  status: string;
  species: Species;
  type: string;
  gender: string;
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

export enum Species {
  'alive' = 'alive',
  'dead' = 'alive',
  'unknown' = 'alive',
}

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
