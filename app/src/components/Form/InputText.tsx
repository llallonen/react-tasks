import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputTextProps {
  register: UseFormRegister<FieldValues>;
  required: boolean;
  hasError: true | null;
  errorText: string;
}

const InputText = ({ register, required, hasError, errorText }: InputTextProps) => {
  return (
    <>
      <label className="form__item">
        {"Enter the pokemon's name"}
        <input
          {...register('pokeName', { required: true })}
          className="text"
          type="text"
          placeholder="Name"
        ></input>
        <br />
        {hasError && <div className="form__error">{errorText}</div>}
      </label>
    </>
  );
};

export default InputText;
