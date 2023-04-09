import React from 'react';
import { InputWithLabelProps } from '../../types/types';

export default function Radio({
  register,
  label,
  children,
}: React.PropsWithChildren<InputWithLabelProps>) {
  return (
    <label>
      {label}
      <input
        className="radio"
        type="radio"
        value={label}
        role="radio"
        {...register('isShiny', { required: true })}
      ></input>
      {children}
    </label>
  );
}
