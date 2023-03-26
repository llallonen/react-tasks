import React, { RefObject } from 'react';

interface InputDateProps {
  inputDateRef: RefObject<HTMLInputElement>;
}

class InputDate extends React.Component<InputDateProps> {
  render() {
    return <input type="date" ref={this.props.inputDateRef}></input>;
  }
}

export default InputDate;
