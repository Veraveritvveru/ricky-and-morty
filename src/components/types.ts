export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  image: string;
  episode: string[];
}

export interface CardListProps {
  results: Character[];
}
