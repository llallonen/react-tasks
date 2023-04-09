import { IPokemon, PokemonProps } from '../types/types';

export function Pokemon(props: IPokemon) {
  return (
    <div className="pokemon">
      <img className="pokemon__img" src={props.image}></img>
      <span className="pokemon__id">{props.id}</span>
      <h3 className="pokemon__title">{props.name}</h3>
    </div>
  );
}
