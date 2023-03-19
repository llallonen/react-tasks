import React from 'react';
import air from 'public/air.svg';

export interface PokemonProps {
    img: string;
    id: number;
    name: string;
    typeList: Array<string>;
}

enum PokemonTypes {
  'Bug',
  'Water',
  'Poison',
  'Normal',
  'Flying',
  'Grass'
}

function mapTypeToIcon(type: PokemonTypes) {
  return 
}

export class Pokemon extends React.Component<PokemonProps> {
  constructor(props: PokemonProps) {
    super(props);
  }
  render() {
    return <>
    <div className='pokemon'>
        <img className='pokemon__img' src={this.props.img}></img>
        <span className='pokemon__id'>{this.props.id}</span>
        <h3 className='pokemon__title'>{this.props.name}</h3>
        <p className='pokemon__type'>{this.props.typeList.join(", ")}</p>
    </div>
    </>;
  }
}
