import axios from 'axios';
import { Character, PaginationInfo, Species } from '../types/types';
import removeEmptyProperty from '../utils/removeEmptyProperty';

type Filters = {
  name?: string;
  species?: Species;
  page?: number;
};

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getAllCharacters = async (
  params: Filters
): Promise<{ info: PaginationInfo; results: Character[] }> => {
  try {
    const response = await api.get('/character', { params: removeEmptyProperty(params) });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
