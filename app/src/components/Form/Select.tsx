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
  selectRef: RefObject<HTMLSelectElement>;
}

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }
  render() {
    return (
      <select ref={this.props.selectRef}>
        {RegionNames.map((region: Region, index) => (
          <option key={index} value={region} >
            {region}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
