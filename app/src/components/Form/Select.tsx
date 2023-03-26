import React, { RefObject } from 'react';

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

interface SelectProps {
  selectRef: RefObject<HTMLInputElement>;
}

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }
  render() {
    return (
      <label>
        Choose pokemon&apos;s region
        <select>
          {RegionNames.map((region: Region) => (
            <option key={RegionNames.id} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;
