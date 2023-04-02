import { useState, useEffect } from 'react';
import { PokemonProps } from '../components/Pokemon';
import { PokemonsListProps } from '../components/PokemonsList';

const useFetch = (url: string) => {
  const [data, setData] = useState<null | PokemonsListProps>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);
  return data;
};

export default useFetch;
