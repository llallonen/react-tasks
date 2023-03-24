import React from 'react';
import { Pokemon, PokemonProps } from './Pokemon';

interface PokemonsListProps {
  pokemons?: Array<PokemonProps>;
}

class PokemonsList extends React.Component<PokemonsListProps> {
  constructor(props: PokemonsListProps) {
    super(props);
  }
  render() {
    return !this.props.pokemons
      ? 'No pokemons :('
      : this.props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} {...pokemon} />);
  }
}

export default PokemonsList;
