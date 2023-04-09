import { PokemonClient } from 'pokenode-ts';
import { IPokemonResponse } from '../types/types';

export async function getPokemons() {
  const api = new PokemonClient();

  await api
    .listPokemons()
    .then((data) => { console.log (data.results) })
    .catch((error) => console.error(error));
}
