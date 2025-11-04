import { Component } from 'react';
import noResultsImage from '../../assets/noResults.png';
import styles from './NoResults.module.scss';

export default class NoResults extends Component {
  public override render() {
    return (
      <div className={styles.noResults}>
        <p>This character does not exist</p>
        <p>Try a different name</p>
        <img src={noResultsImage} alt="No results found" />
      </div>
    );
  }
}
