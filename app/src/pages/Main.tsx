import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { PokemonsList } from '../components/PokemonsList';
import SearchBar from '../components/SearchBar';
import { IPokemonResponse, PokemonProps } from '../types/types';

function Main() {

  const [dataPokemons, setDataPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    const promises: Array<Promise<IPokemonResponse>> = [];
    for (let i = 1; i <= 40; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
      const pokemons: Array<PokemonProps> = results.map((result) => ({
        image: result.sprites['front_default'],
        id: result.id,
        name: result.name,
        types: result.types.map((type) => type.type.name).join(', '),
      }));

      setDataPokemons((prevPokemons) => [...prevPokemons, ...pokemons])

    });
  }, []);
  console.log(dataPokemons);
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
