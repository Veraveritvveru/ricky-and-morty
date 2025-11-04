import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default class Header extends Component<HeaderProps> {
  public override render() {
    return (
      <header className={styles.header}>
        <img src={logo} alt="Rick and Morty logo" />
        <SearchForm
          inputValue={this.props.inputValue}
          onInputChange={this.props.onInputChange}
          onSearchSubmit={this.props.onSearchSubmit}
        />
        <div>ThemeSwitch</div>
      </header>
    );
  }
}
