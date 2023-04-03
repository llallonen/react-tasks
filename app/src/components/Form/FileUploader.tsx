import { InputProps } from '../../types/types';

export default function FileUploader({ register, required }: InputProps) {
  return (
    <label className="form__item file">
      {'Upload photo of this pokemon'}
      <input
        type="file"
        className="form__input"
        accept=".jpg, .jpeg, .png"
        {...register('imgUrl', { required: true })}
      ></input>
    </label>
  );
}
