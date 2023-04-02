import { useState } from 'react';
import Layout from '../components/Layout';
import PokemonsList from '../components/PokemonsList';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import { POKEMONS_URL } from '../variables';

function Main() {
  const [pokemonsState, setPokemonsState] = useState('');

  const [data, setData] = useState(null);

  const dataPokemons = useFetch(POKEMONS_URL);
  //console.log(dataPokemons);

  let currPage = window.location.pathname.slice(1);
  if (currPage.length === 0) {
    currPage = 'Home page';
  }

  return (
    <Layout currentPage={currPage}>
      <SearchBar />
      <PokemonsList pokemons={dataPokemons ? dataPokemons.pokemons : null} />
    </Layout>
  );
}

export { Main };
