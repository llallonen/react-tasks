import { InputProps } from '../../types/types';

export const RegionNames = [
  'Kanto',
  'Johno',
  'Hoenn',
  'Sinnoh',
  'Unova',
  'Kalos',
  'Alola',
  'Galar',
  'Hisui',
  'Paldea',
];

type RegionNamesTuple = typeof RegionNames;
export type Region = RegionNamesTuple[number];

export default function Select({ register }: InputProps) {
  return (
    <select className="select form__item" role="region" {...register('region')}>
      {RegionNames.map((region: Region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
