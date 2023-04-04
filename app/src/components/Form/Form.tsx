import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { TNote } from '../../types/types';
import Checkbox from './Checkbox';
import InputDate from './Date';
import FileUploader from './FileUploader';
import InputText from './InputText';
import Radio from './Radio';
import Select from './Select';
import NotesList from '../NotesList';

function Form() {
  const [notes, setNotes] = React.useState<TNote[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function addNote(newNote: TNote)  {
    setNotes([...notes, newNote]);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const fileData = data.img[0];
    const imgUrl = URL.createObjectURL(fileData);
    console.log(imgUrl);

    const newNote: TNote = {
      name: data.pokeName,
      img: imgUrl,
      date: data.dateOfMeeting,
      shiny: data.isShiny ? 'Gotcha!' : 'No :(',
      gotcha: data.isСaught ? 'Shiny' : 'Not shiny',
      region: data.region,
    };

    addNote(newNote);
    console.log(notes)
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <InputText register={register} required={true}>
          {
            <ErrorMessage
              errors={errors}
              name="pokeName"
              render={() => <div className="form__error">{'Please enter the name'}</div>}
            />
          }
        </InputText>
        <InputDate register={register} required={true}>
          {
            <ErrorMessage
              errors={errors}
              name="date"
              render={() => <div className="form__error">{'Please choose the date'}</div>}
            />
          }
        </InputDate>
        <Checkbox label="Did you catch it?" register={register} required={false} />
        <fieldset className="fieldset form__item" id="isShiny">
          <legend>Was this Pokémon shiny?</legend>
          <Radio label="Yes" register={register} required={false} />
          <Radio label="No" register={register} required={false} />
        </fieldset>
        <FileUploader register={register} required={false} />
        <Select register={register} required={true} />
        <input className="form__submit" type="submit" value="Create note" />
      </form>
      <div className="notes__wrapper">{<NotesList notes={notes} />}</div> 
    </>
  );
}

export default Form;
