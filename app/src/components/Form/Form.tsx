import React from 'react';
import { Note, TNote } from '../Note';
import NotesList from '../NotesList';
import Checkbox from './Checkbox';
import InputDate from './Date';
import FileUploader from './FileUploader';
import InputText from './InputText';
import { Radio } from './Radio';
import Select from './Select';

interface FormProps {}

interface FormState {
  metPokemons: TNote[];
}

class Form extends React.Component<FormProps, FormState> {
  private formRef = React.createRef<HTMLFormElement>();
  private inputDateRef = React.createRef<HTMLInputElement>();
  private inputTextRef = React.createRef<HTMLInputElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  private fileUploadRef = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);

    this.state = {
      metPokemons: [],
    };
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const values = {
      dateOfMeeting: this.inputDateRef.current!.value,
      pokeName: this.inputTextRef.current!.value,
      isСaught: this.checkboxRef.current!.checked ? 'Gotcha!' : 'No :(',
      isShiny: this.checkboxRef.current!.checked ? 'Shiny' : 'Not shiny',
      region: this.selectRef.current!.value,
      pokePhoto: this.fileUploadRef.current!.value,
    };

    const fileData = this.fileUploadRef.current!.files![0];
    const imgUrl = URL.createObjectURL(fileData);

    const newNote: TNote = {
      name: values.pokeName,
      img: imgUrl,
      date: values.dateOfMeeting,
      shiny: values.isShiny,
      gotcha: values.isСaught,
      region: values.region,
    };

    this.addNote(newNote);
    this.formRef.current!.reset();
  }

  addNote(newNote: TNote) {
    this.setState({ metPokemons: [...this.state.metPokemons, newNote] });
    console.log(this.state.metPokemons);
  }

  render() {
    return (
      <>
        <form className="form" ref={this.formRef} onSubmit={this.handleSubmit.bind(this)}>
          <InputText placeholder="Name" inputTextRef={this.inputTextRef} />
          <InputDate inputDateRef={this.inputDateRef} />
          <Checkbox label="Did you catch it?" checkboxRef={this.checkboxRef} />
          <fieldset className="fieldset form__item" id="isShiny">
            <legend>Was this Pokémon shiny?</legend>
            <Radio value="Yes" radioRef={this.radioRef} />
            <Radio value="No" radioRef={this.radioRef} />
          </fieldset>
          <FileUploader fileUploadRef={this.fileUploadRef} />
          <Select selectRef={this.selectRef} />
          <input className="form__submit" type="submit" value="Create note" />
        </form>
        <div className="notes__wrapper">
          <NotesList notes={this.state.metPokemons} />
        </div>
      </>
    );
  }
}

export default Form;
