import { Component } from 'react';
import styles from './CardList.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

import type { CardListProps } from '../types';

export default class CardList extends Component<CardListProps> {
  public override render() {
    return (
      <section className={styles.cardList}>
        {this.props.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    );
  }
}
