import { Component } from 'react';
import type { Character } from '../types';
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  character: Character;
}

export default class CharacterCard extends Component<CharacterCardProps> {
  public override render() {
    return (
      <div className={styles.card}>
        <img
          src={this.props.character.image}
          alt={this.props.character.name}
          className={styles.cardImg}
        />
        <div className={styles.cardInfo}>
          <h3 className={styles.cardName}>{this.props.character.name}</h3>
          <div className={styles.cardInfoItem}>
            <span>Gender</span>
            <span>{this.props.character.gender}</span>
          </div>
          <div className={styles.cardInfoItem}>
            <span>Species</span>
            <span>{this.props.character.species}</span>
          </div>
          <div className={styles.cardInfoItem}>
            <span>Status</span>
            <span>{this.props.character.status}</span>
          </div>
          <div className={styles.cardEpisode}>
            Appears in {this.props.character.episode.length} episodes
          </div>
        </div>
      </div>
    );
  }
}
