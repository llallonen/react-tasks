import { InputProps } from '../../types/types';

const InputText = ({ register, required, children }: React.PropsWithChildren<InputProps>) => {
  return (
    <>
      <label className="form__item">
        {"Enter the pokemon's name"}
        <input
          {...register('pokeName', { required: 'Please enter the name' })}
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
