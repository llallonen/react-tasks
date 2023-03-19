import React, { ChangeEvent } from 'react';
import Layout from '../components/Layout';
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
    let currPage = window.location.pathname.slice(1);
    if (currPage.length === 0) {
      currPage = 'Home'
    }

    return (
      <Layout currentPage={currPage}>
        <SearchBar value={this.state.searchBarValue} onChange={this.onChange} />
      </Layout>
    );
  }
}

export { Main };
