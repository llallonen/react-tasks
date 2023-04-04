import React from 'react';
import { InputProps } from '../../types/types';

export default function InputDate({ register, children }: React.PropsWithChildren<InputProps>) {
  return (
    <label className="form__item">
      <input type="date" {...register('dateOfMeeting', { required: true })} />
      {children}
    </label>
  );
}
