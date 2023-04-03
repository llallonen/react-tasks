import React from 'react';
import { InputProps } from '../../types/types';

export default function InputDate({
  register,
  required,
  children,
}: React.PropsWithChildren<InputProps>) {
  return (
    <label className="form__item">
      <input
        type="date"
        {...register('date', { required: true })}
      />
      {children}
    </label>
  );
}
