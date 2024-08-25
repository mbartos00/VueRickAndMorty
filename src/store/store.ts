import { defineStore } from 'pinia';
import { Character } from '../types/types';

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
