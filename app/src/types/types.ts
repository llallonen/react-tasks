import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface FormDataValues {
  pokeName: string;
  date: string;
  select: string;
  iShiny: string;
  isCaught: string;
  Photo: string;
  Region: string;
}

export interface FormState {
  message: string;
  errorName: string;
  errorDate: string;
  errorShiny: string;
  errorCaught: string;
  errorPhoto: string;
  errorRegion: string;
  metPokemons: TNote[];
}
export interface InputProps {
  register: UseFormRegister<FieldValues>;
  required: boolean;
}

export interface InputWithLabelProps extends InputProps {
  label: string;
}

export interface CheckboxProps {
  register: UseFormRegister<FieldValues>;
  label: string;
}

export interface TNote {
  name: string;
  img?: string;
  date?: string;
  gotcha: string;
  shiny?: string;
  region?: string;
}
