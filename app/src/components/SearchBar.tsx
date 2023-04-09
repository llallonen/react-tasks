import { useEffect, useLayoutEffect, useState } from 'react';

export default function SearchBar() {
  const [searchBarValue, setSearchBarValue] = useState('');

  useLayoutEffect(() => {
    const input = localStorage.getItem('input');
    if (input) {
      setSearchBarValue(input);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('input', searchBarValue);
  }, [searchBarValue]);

  return (
    <div className="search__wrapper">
      <input
        className="search"
        type="search"
        data-testid="search-bar"
        onChange={(event) => setSearchBarValue(event.target.value)}
        value={searchBarValue}
        placeholder="Enter something"
      />
    </div>
  );
}
