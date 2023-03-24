import React from 'react';
import Layout from '../components/Layout';
import { PokemonProps } from '../components/Pokemon';
import PokemonsList from '../components/PokemonsList';
import SearchBar from '../components/SearchBar';
import { POKEMONS_URL } from '../variables';

class Main extends React.Component<
  object,
  { searchBarValue: string; pokemons?: Array<PokemonProps> }
> {
  constructor(props: object) {
    super(props);
    this.state = { searchBarValue: '', pokemons: undefined };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchBarValue: e.target.value });
    localStorage.setItem('input', e.target.value);
  }

  componentDidMount(): void {
    if (localStorage.getItem('input') === null) {
      localStorage.setItem('input', '');
    }
    this.setState({ searchBarValue: localStorage.getItem('input')! });

    fetch(POKEMONS_URL)
      .then((res) => res.json())
      .then((pokemons) => {
        console.log('pokemons', pokemons);
        this.setState({ pokemons: pokemons.pokemons });
      });
  }

  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.searchBarValue);
  }

  componentDidUpdate() {
    console.log(this.state.pokemons);
  }

  render() {
    let currPage = window.location.pathname.slice(1);
    if (currPage.length === 0) {
      currPage = 'Home page';
    }

    return (
      <Layout currentPage={currPage}>
        <SearchBar value={this.state.searchBarValue} onChange={this.onChange} />
        <PokemonsList pokemons={this.state.pokemons} />
      </Layout>
    );
  }
}

export { Main };
