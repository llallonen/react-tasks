import React, { RefObject } from 'react';

interface InputTextProps {
  placeholder: string;
  inputTextRef: RefObject<HTMLInputElement>;
}

class InputText extends React.Component<InputTextProps> {
  constructor(props: InputTextProps) {
    super(props);
  }
  render() {
    return (
      <label className="form__item">
        {"Enter the pokemon's name"}
        <input
          className="text"
          type="text"
          placeholder={this.props.placeholder}
          name="region"
          ref={this.props.inputTextRef}
        ></input>
      </label>
    );
  }
}

export default InputText;
