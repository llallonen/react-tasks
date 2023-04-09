import React from 'react';
import { CheckboxProps, InputWithLabelProps } from '../../types/types';

export default function Checkbox({
  register,
  label,
  children,
}: React.PropsWithChildren<CheckboxProps>) {
  return (
    <>
      <label className="form__item">
        {label}
        <input className="checkbox" type="checkbox" role="checkbox" {...register('isCaught')} />
      </label>
      {children}
    </>
  );
}
