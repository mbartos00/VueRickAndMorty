import { defineStore } from 'pinia';
import { getAllCharacters, getCharacter } from '../api/api';
import { Character, PaginationInfo, Species } from '../types/types';

interface CharacterStoreState {
  characters: Character[];
  character: Character | null;
  paginationInfo: PaginationInfo | null;
  loading: boolean;
  error: string | null;
}

const saveToLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    favourites: loadFromLocalStorage('favourites') as Character[],
  }),
  actions: {
    addFavourite(character: Character) {
      const exists = this.favourites.some(fav => fav.id === character.id);
      if (!exists) {
        this.favourites.push(character);
        saveToLocalStorage('favourites', this.favourites);
      }
    },
    removeFavourite(id: number) {
      this.favourites = this.favourites.filter(fav => fav.id !== id);
      saveToLocalStorage('favourites', this.favourites);
    },
  },
  getters: {
    isFavourite: state => (id: number) => {
      return state.favourites.some(fav => fav.id === id);
    },
    totalFavourites: state => {
      return state.favourites.length;
    },
  },
});

export const useCharacterStore = defineStore('characterStore', {
  state: (): CharacterStoreState => ({
    characters: [],
    character: null,
    paginationInfo: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAllCharacters({
      page,
      name,
      species,
    }: {
      page?: number;
      name?: string;
      species?: Species;
    }) {
      this.loading = true;
      this.error = null;
      try {
        const response = await getAllCharacters({
          page: page || 1,
          name: name,
          species: species,
        });
        this.characters = response.results;
        this.paginationInfo = response.info;
        this.loading = false;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch characters';
      } finally {
        this.loading = false;
      }
    },

    async fetchCharacter(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const response = await getCharacter(id);
        this.character = response.results;
      } catch (error: any) {
        console.error('Error fetching character:', error);
        this.error = error.message || 'Failed to fetch character';
      } finally {
        this.loading = false;
      }
    },

    resetCharacter() {
      this.character = null;
    },
  },
});
