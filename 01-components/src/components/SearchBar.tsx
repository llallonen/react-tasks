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
      <div className="search__wrapper">
        <input
          className="search"
          type="search"
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder="Enter something"
        />
      </div>
    );
  }
}

export default SearchBar;
