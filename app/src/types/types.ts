export interface FormDataValues {
  pokeName: string;
  date: string;
  select: string;
  iShiny: string;
  isCaught: string;
  Photo: FileList;
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

export interface TNote {
  name: string;
  img: string;
  date: string;
  gotcha: string;
  shiny: string;
  region: string;
}
