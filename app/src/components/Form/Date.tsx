import React from 'react';
import { InputProps } from '../../types/types';

export default function InputDate({ register, children }: React.PropsWithChildren<InputProps>) {
  const maxDate = new Date().toISOString().split('T')[0];
  return (
    <label className="form__item">
      <input type="date" max={maxDate} role="date" {...register('dateOfMeeting', { required: true })} />
      {children}
    </label>
  );
}
