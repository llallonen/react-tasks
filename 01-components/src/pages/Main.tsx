import React, { ChangeEvent } from 'react';
import SearchBar from '../components/SearchBar';

class Main extends React.Component<{}, { searchBarValue: string }> {
  constructor(props: Object) {
    super(props);
    this.state = { searchBarValue: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchBarValue: e.target.value });
    localStorage.setItem('input', e.target.value);
  }

  componentDidMount(): void {
    if (localStorage.getItem('input') === null) {
      localStorage.setItem('input', '');
    }
    this.setState({ searchBarValue: localStorage.getItem('input')! });
  }

  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.searchBarValue);
  }

  render() {
    return (
      <div>
        <h1>This is main page</h1>
        <SearchBar value={this.state.searchBarValue} onChange={this.onChange} />
      </div>
    );
  }
}

export { Main };
