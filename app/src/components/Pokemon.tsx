export interface PokemonProps {
  img: string;
  id: number;
  name: string;
  typeList: Array<string>;
}

export function Pokemon(props: PokemonProps) {
  return (
    <div className="pokemon">
      <img className="pokemon__img" src={props.img}></img>
      <span className="pokemon__id">{props.id}</span>
      <h3 className="pokemon__title">{props.name}</h3>
    </div>
  );
}
