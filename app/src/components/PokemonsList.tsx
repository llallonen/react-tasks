import { Pokemon, PokemonProps } from './Pokemon';

export interface PokemonsListProps {
  pokemons: Array<PokemonProps> | null;
}

export function PokemonsList(props: PokemonsListProps): JSX.Element {
  return (
    <>
      {!props.pokemons ? (
        <div>{`No any pokemons :(`}</div>
      ) : (
        props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} />)
      )}
    </>
  );
}
