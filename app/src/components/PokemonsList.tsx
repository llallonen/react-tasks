import { PokemonsListProps } from '../types/types';
import { PokemonProps } from '../types/types';
import { Pokemon } from './Pokemon';

export function PokemonsList(props: PokemonsListProps): JSX.Element {

  return (
    <>
      {!props ? (
        <div>{`No any pokemons :(`}</div>
      ) : (
        props.map((pokemon) => <div><Pokemon key={pokemon.id} {...pokemon} /></div>)
        )}
    </>
  );
}
