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
  }

  componentDidMount(): void {
    fetch(POKEMONS_URL)
      .then((res) => res.json())
      .then((pokemons) => {
        console.log('pokemons', pokemons);
        this.setState({ pokemons: pokemons.pokemons });
      });
  }

  render() {
    let currPage = window.location.pathname.slice(1);
    if (currPage.length === 0) {
      currPage = 'Home page';
    }

    return (
      <Layout currentPage={currPage}>
        <SearchBar />
        <PokemonsList pokemons={this.state.pokemons} />
      </Layout>
    );
  }
}

export { Main };
