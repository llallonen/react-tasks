import { InputProps } from '../../types/types';

const InputText = ({ register, children }: React.PropsWithChildren<InputProps>) => {
  return (
    <>
      <label className="form__item">
        {"Enter the pokemon's name"}
        <input
          {...register('pokeName', {
            required: 'Please enter the name',
            pattern: /[A-Za-z]/,
            minLength: { value: 3, message: 'Minimum 3 symbols' },
            maxLength: { value: 21, message: 'Maximum 20 symbols' },
          })}
          className="text"
          type="text"
          placeholder="Name"
        ></input>
        {children}
      </label>
    </>
  );
};

export default InputText;
