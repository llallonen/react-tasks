import { InputProps } from '../../types/types';

export default function FileUploader({ register }: InputProps) {
  return (
    <label className="form__item file">
      {'Upload photo of this pokemon'}
      <input
        type="file"
        className="form__input"
        accept=".jpg, .jpeg, .png"
        {...register('img', { required: true })}
      ></input>
    </label>
  );
}
