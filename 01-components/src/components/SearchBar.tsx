import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  render() {
    return (
      <input
        type="search"
        onChange={this.props.onChange}
        value={this.props.value}
        placeholder="Enter something"
      />
    );
  }
}

export default SearchBar;
