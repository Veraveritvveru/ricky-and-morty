import type { Character } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (
  searchQuery: string = ''
): Promise<Character[]> => {
  const trimmedQuery = searchQuery.trim();

  const url = trimmedQuery
    ? `${BASE_URL}/?name=${encodeURIComponent(trimmedQuery)}`
    : BASE_URL;

  const response = await fetch(url);

  // if (!response.ok) {
  //   const errorData = await response.json().catch(() => ({}));
  //   const message = errorData.error || `HTTP error! status: ${response.status}`;
  //   throw new Error(message);
  // }

  const data = await response.json();

  if (data.error) {
    console.log(data.error);
    return [];
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return Array.isArray(data.results) ? data.results : [];
};
