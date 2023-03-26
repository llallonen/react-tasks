import React, { RefObject } from 'react';

interface InputDateProps {
  inputDateRef: RefObject<HTMLInputElement>;
}

class InputDate extends React.Component<InputDateProps> {
  constructor(props: InputDateProps) {
    super(props);
  }
  render() {
    return <input type="date" ref={this.props.inputDateRef} />;
  }
}

export default InputDate;
