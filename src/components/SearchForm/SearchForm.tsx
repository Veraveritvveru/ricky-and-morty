import styles from './SearchForm.module.scss';
import Button from '../UI/Button/Button';
import React from 'react';

interface SearchFormProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  inputValue,
  onInputChange,
  onSearchSubmit,
}: SearchFormProps) => {
  return (
    <form onSubmit={onSearchSubmit} className={styles.searchForm}>
      <input
        className={styles.searchInput}
        type="search"
        onChange={onInputChange}
        placeholder="Search for a character..."
        value={inputValue}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
