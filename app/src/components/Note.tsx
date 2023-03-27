import React from 'react';

export interface TNote {
  name: string;
  img: string;
  date: string;
  gotcha: string;
  shiny: string;
  region: string;
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
        <div className="note__img">
          <img src={this.props.img}></img>
        </div>
        <div>
          <p className="pokemon__isShiny">{this.props.gotcha}</p>
          <p className="pokemon__gotcha">
            <span>Version:</span> {this.props.shiny}
          </p>
        </div>
        <p className="pokemon__region">
          <span>Region:</span> {this.props.region}
        </p>
      </div>
    );
  }
}
