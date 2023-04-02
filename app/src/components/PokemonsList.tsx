import { Pokemon, PokemonProps } from './Pokemon';

interface PokemonsListProps {
  pokemons?: Array<PokemonProps>;
}

function PokemonsList(props: PokemonsListProps): JSX.Element {
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

export default PokemonsList;
