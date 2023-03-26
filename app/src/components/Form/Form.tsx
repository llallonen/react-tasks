import React from 'react';
import Checkbox from './Checkbox';
import InputDate from './Date';
import FileUploader from './FileUploader';
import InputText from './InputText';
import { Radio } from './Radio';

interface FormProps {}

interface FormState {}

class Form extends React.Component<FormProps, FormState> {
  private formRef = React.createRef<HTMLFormElement>();
  private inputDateRef = React.createRef<HTMLInputElement>();
  private inputTextRef = React.createRef<HTMLInputElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLInputElement>();
  private fileUploadRef = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);

    this.state = {
      metPokemons: [],
    };
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    {
      const values = {
        dateOfMeeting: this.inputDateRef.current!.value,
        pokeName: this.inputTextRef.current!.value,
        isСaught: this.checkboxRef.current!.checked,
        isShiny: this.checkboxRef.current!.checked,
        region: this.selectRef.current!,
        pokePhoto: this.fileUploadRef.current!.value,
      };

      console.log(values);
      const fileData = this.fileUploadRef.current!.files![0];
      const img = URL.createObjectURL(fileData);
    }
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <InputDate inputDateRef={this.inputDateRef} />
          <InputText placeholder="Name" inputTextRef={this.inputTextRef} />
          <Checkbox label="Did you catch it?" checkboxRef={this.checkboxRef} />
          <fieldset id="isShiny">
            <Radio value="Yes" radioRef={this.radioRef} />
            <Radio value="No" radioRef={this.radioRef} />
          </fieldset>
          <FileUploader fileUploadRef={this.fileUploadRef} />

          <input type="submit" value="Create note" />
        </form>
      </>
    );
  }
}

export default Form;
