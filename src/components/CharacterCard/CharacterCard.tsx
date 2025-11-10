import React from 'react';
import type { FilteredCharacter } from '../../types';
import styles from './CharacterCard.module.scss';
import CharacterImage from '../CharacterImage/CharacterImage';
import { Link, useSearchParams } from 'react-router';

interface CharacterCardProps {
  character: FilteredCharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link to={`${character.id}?${searchParams}`}>
      <div className={styles.card}>
        <CharacterImage src={character.image} alt={character.name} />
        <div className={styles.cardInfo}>
          <h3 className={styles.cardName}>{character.name}</h3>
          <div className={styles.cardInfoItem}>
            <span>Gender</span>
            <span>{character.gender}</span>
          </div>
          <div className={styles.cardInfoItem}>
            <span>Species</span>
            <span>{character.species}</span>
          </div>
          <div className={styles.cardInfoItem}>
            <span>Status</span>
            <span>{character.status}</span>
          </div>
          <div className={styles.cardEpisode}>
            Appears in {character.episode.length} episodes
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
