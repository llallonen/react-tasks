import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPokemon {
  image: string;
  id: number;
  name: string;
  types: string;
}

export interface PokemonProps {
  pokemon: Array<IPokemon> | null
}

export interface PokemonsListProps {
  pokemons: Array<IPokemon>;
}

export interface IPokemonResponse {
  sprites: string;
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

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
