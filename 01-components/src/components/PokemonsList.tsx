import React from 'react';
import { Pokemon, PokemonProps } from './Pokemon';

interface PokemonsListProps {
  pokemons?: Array<PokemonProps>;
}

interface PokemonsListState {}

class PokemonsList extends React.Component<PokemonsListProps, PokemonsListState> {
  constructor(props: PokemonsListProps) {
    super(props);
  }
  render() {
    return !this.props.pokemons
      ? 'No pokemons :('
      : this.props.pokemons.map((pokemon) => <Pokemon {...pokemon}/>);
  }
}

export default PokemonsList;
