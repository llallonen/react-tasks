import React, { RefObject } from 'react';

interface CheckboxProps {
  label: string;
  checkboxRef: RefObject<HTMLInputElement>;
}

class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return (
      <label className='form__item'>
        {this.props.label}
        <input className="checkbox" type="checkbox" ref={this.props.checkboxRef} />
      </label>
    );
  }
}

export default Checkbox;
