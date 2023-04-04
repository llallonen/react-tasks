import React from 'react';
import { InputWithLabelProps } from '../../types/types';

export default function Checkbox({
  register,
  label,
  children,
}: React.PropsWithChildren<InputWithLabelProps>) {
  return (
    <>
      <label className="form__item">
        {label}
        <input className="checkbox" type="checkbox" {...register('isCaught', { required: true })} />
      </label>
      {children}
    </>
  );
}
