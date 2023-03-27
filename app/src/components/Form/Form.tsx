import React from 'react';
import { TNote } from '../Note';
import NotesList from '../NotesList';
import Checkbox from './Checkbox';
import InputDate from './Date';
import FileUploader from './FileUploader';
import InputText from './InputText';
import { Radio } from './Radio';
import Select from './Select';

interface FormState {
  message: string;
  errorName: string;
  errorDate: string;
  errorShiny: string;
  errorCaught: string;
  errorPhoto: string;
  errorRegion: string;
  metPokemons: TNote[];
}

class Form extends React.Component<object, FormState> {
  private formRef = React.createRef<HTMLFormElement>();
  private inputDateRef = React.createRef<HTMLInputElement>();
  private inputTextRef = React.createRef<HTMLInputElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  private fileUploadRef = React.createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      message: '',
      errorName: '',
      errorDate: '',
      errorShiny: '',
      errorCaught: '',
      errorPhoto: '',
      errorRegion: '',
      metPokemons: [],
    };
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateName();
    this.validateDate();
    this.validateIsShiny();

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

  validateName() {
    const pokeName = this.inputTextRef.current!.value;

    if (pokeName.length < 3) {
      this.setState({ errorName: `Pokémon's name should contain 3 symbols at least` });
    }
    if (pokeName.match(/[0-9]/) !== null) {
      this.setState({ errorName: `Pokémon's name shouldn't contain numbers` });
    }
    if (!/^[A-ZА-Я]/.test(pokeName)) {
      this.setState({ errorName: `Pokémon's name should start from uppercase` });
    }
  }

  validateDate() {
    const date = this.inputDateRef.current!.value;
    if (date) {
      this.setState({ errorDate: '' });
    } else {
      this.setState({ errorDate: 'Please enter date of meeting' });
    }
  }

  validateIsShiny() {
    const isShiny = this.checkboxRef.current!.checked;
    if (isShiny) {
      this.setState({ errorShiny: '' });
    } else {
      this.setState({ errorShiny: 'Please check if this Pokémon was shiny' });
    }
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
