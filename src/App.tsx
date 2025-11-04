import './App.scss';
import { Component } from 'react';
import type { AppProps, AppState } from './types';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { fetchCharacters } from './services/characterService';
import NoResults from './components/NoResults/NoResults';
import Loader from './components/Loader/Loader';

export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    inputValue: '',
    searchResults: [],
    loading: false,
    error: null,
  };

  override componentDidMount = async (): Promise<void> => {
    this.loadCharacters();
  };

  private handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ inputValue: e.target.value });
  };

  private handleSubmitButton = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.loadCharacters(inputValue);
    this.setState({ inputValue: '' });
  };

  private loadCharacters = async (inputValue: string = ''): Promise<void> => {
    this.setState({ loading: true, error: null });

    try {
      const results = await fetchCharacters(inputValue);
      this.setState({ searchResults: results, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      this.setState({ error: message, loading: false });
    }
  };

  public override render() {
    const { inputValue, searchResults, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="App">
        <Header
          inputValue={inputValue}
          onInputChange={this.handleInputChange}
          onSearchSubmit={this.handleSubmitButton}
        />
        {searchResults.length ? (
          <CardList results={searchResults} />
        ) : (
          <NoResults />
        )}
      </div>
    );
  }
}
