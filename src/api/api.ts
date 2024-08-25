import axios, { AxiosResponse } from 'axios';
import { Character, PaginationInfo, Species } from '../types/types';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getAllCharacters = async ({
  page = 1,
  name,
  species,
}: {
  page: number;
  name: string;
  species: Species;
}): Promise<AxiosResponse<PaginationInfo & Character[]>> => {
  try {
    const response = await api.get('/character', { params: { page, name, species } });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async ({ id }: { id: number }): Promise<AxiosResponse<Character>> => {
  try {
    const response = await api.get(`/character/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
