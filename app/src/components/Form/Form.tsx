import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import InputText from './InputText';

function Form(props) {
  // private formRef = React.createRef<HTMLFormElement>();
  // private inputDateRef = React.createRef<HTMLInputElement>();
  // private inputTextRef = React.createRef<HTMLInputElement>();
  // private checkboxRef = React.createRef<HTMLInputElement>();
  // private radioRef = React.createRef<HTMLInputElement>();
  // private selectRef = React.createRef<HTMLSelectElement>();
  // private fileUploadRef = React.createRef<HTMLInputElement>();

  // constructor(props: object) {
  //   super(props);

  //   this.state = {
  //     message: '',
  //     errorName: '',
  //     errorDate: '',
  //     errorShiny: '',
  //     errorCaught: '',
  //     errorPhoto: '',
  //     errorRegion: '',
  //     metPokemons: [],
  //   };
  // }

  // handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   this.validateName();
  //   this.validateDate();
  //   this.validateIsShiny();

  //   const values = {
  //     dateOfMeeting: this.inputDateRef.current!.value,
  //     pokeName: this.inputTextRef.current!.value,
  //     isСaught: this.checkboxRef.current!.checked ? 'Gotcha!' : 'No :(',
  //     isShiny: this.checkboxRef.current!.checked ? 'Shiny' : 'Not shiny',
  //     region: this.selectRef.current!.value,
  //     pokePhoto: this.fileUploadRef.current!.value,
  //   };

  //   const fileData = this.fileUploadRef.current!.files![0];
  //   const imgUrl = URL.createObjectURL(fileData);

  //   const newNote: TNote = {
  //     name: values.pokeName,
  //     img: imgUrl,
  //     date: values.dateOfMeeting,
  //     shiny: values.isShiny,
  //     gotcha: values.isСaught,
  //     region: values.region,
  //   };

  //   this.addNote(newNote);
  //   this.formRef.current!.reset();
  // }

  // // addNote(newNote: TNote) {
  // //   this.setState({ metPokemons: [...this.state.metPokemons, newNote] });
  // //   console.log(this.state.metPokemons);
  // // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          register={register}
          required={true}
          hasError={errors.pokeName ? true : null}
          errorText="Please enter name"
        />
        <input className="form__submit" type="submit" value="Create note" />
      </form>
      <div className="notes__wrapper">{/* <NotesList notes={this.state.metPokemons} /> */}</div>
    </>
  );
}

export default Form;
