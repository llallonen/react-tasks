import React, { RefObject } from 'react';

interface RadioProps {
  value: string;
  radioRef: RefObject<HTMLInputElement>;
}

export class Radio extends React.Component<RadioProps> {
  render() {
    return (
      <label>
        {this.props.value}
        <input
          ref={this.props.radioRef}
          className="radio"
          type="radio"
          value={this.props.value}
          name="isShiny"
        ></input>
      </label>
    );
  }
}
