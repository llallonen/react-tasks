import React from 'react';
type TRegionNames =
  | 'Kanto'
  | 'Johno'
  | 'Hoenn'
  | 'Sinnoh'
  | 'Unova'
  | 'Kalos'
  | 'Alola'
  | 'Galar'
  | 'Hisui'
  | 'Paldea';

export interface TNote {
  name: string;
  img: string;
  date: string;
  gotcha: string;
  shiny: string;
  region: HTMLInputElement;
}

export class Note extends React.Component<TNote> {
  constructor(props: TNote) {
    super(props);
  }
  render() {
    return (
      <div className="note">
        <span className="note__date">{this.props.date}</span>
        <h3 className="pokemon__title">{this.props.name}</h3>
        <img className="note__img" src={this.props.img}></img>
        <p className="pokemon__isShiny">{this.props.shiny}</p>
        <p className="pokemon__gotcha">{this.props.shiny}</p>
      </div>
    );
  }
}
