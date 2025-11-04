import { Component } from 'react';
import styles from './SearchForm.module.scss';
import Button from '../UI/Button/Button';

interface SearchFormProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default class SearchForm extends Component<SearchFormProps> {
  public override render() {
    return (
      <form onSubmit={this.props.onSearchSubmit} className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          onChange={this.props.onInputChange}
          placeholder="Search for a character..."
          value={this.props.inputValue}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}
