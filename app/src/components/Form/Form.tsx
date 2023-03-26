import React, { FormEvent, RefObject } from 'react';
import Checkbox from './Checkbox';
import InputDate from './Date';
import FileUploader from './FileUploader';
import InputText from './InputText';
import { Radio } from './Radio';
import Select from './Select';

interface FormProps {}

interface FormState {}

class Form extends React.Component<FormProps, FormState> {
  inputDateRef: RefObject<HTMLInputElement> = React.createRef();
  inputTextRef: RefObject<HTMLInputElement> = React.createRef();
  checkboxRef: RefObject<HTMLInputElement> = React.createRef();
  radioRef: RefObject<HTMLInputElement> = React.createRef();
  selectRef: RefObject<HTMLInputElement> = React.createRef();
  fileUploadRef: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: FormProps) {
    super(props);

    this.state = {
      metPokemons: [],
    }
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form className="form">
          <InputDate inputDateRef={this.inputDateRef} />
          <InputText placeholder="Name" inputTextRef={this.inputTextRef} />
          <Checkbox label="Did you catch it?" checkboxRef={this.checkboxRef} />
          <fieldset id="isShiny">
            <Radio value="Yes" radioRef={this.radioRef} />
            <Radio value="No" radioRef={this.radioRef} />
          </fieldset>
          <Select selectRef={this.selectRef} />
          <FileUploader fileUploadRef={this.fileUploadRef} />
          <input type="submit" value="Create note" />
        </form>
      </>
    );
  }
}

export default Form;
