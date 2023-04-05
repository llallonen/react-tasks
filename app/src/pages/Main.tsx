import Layout from '../components/Layout';
import { PokemonsList } from '../components/PokemonsList';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import { POKEMONS_URL } from '../variables';

function Main() {
  const dataPokemons = useFetch(POKEMONS_URL);

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
