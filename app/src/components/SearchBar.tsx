import { useEffect, useState } from 'react';

export default function SearchBar() {
  const [searchBarValue, setSearchBarValue] = useState('');

  useEffect(() => {
    const input = localStorage.getItem('input');
    input ? setSearchBarValue(input) : '';
    return () => localStorage.setItem('input', searchBarValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('input', searchBarValue);
  }, [searchBarValue]);

  return (
    <div className="search__wrapper">
      <input
        className="search"
        type="search"
        data-testid="custom-element"
        onChange={(event) => setSearchBarValue(event.target.value)}
        value={searchBarValue}
        placeholder="Enter something"
      />
    </div>
  );
}
