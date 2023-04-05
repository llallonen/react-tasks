import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Pokemon } from '../components/Pokemon';
import SearchBar from '../components/SearchBar';

const testPokemon = {
  id: 25,
  name: 'Pikachu',
  typeList: ['Electric'],
  img: 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif',
};

const setup = () => {
  const utils = render(<SearchBar />);
  const input = screen.getByTestId('search-bar') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe('Pokemon card test', () => {
  test('Card renders', () => {
    const pokecard = render(<Pokemon {...testPokemon} />);
    expect(pokecard).toBeTruthy();
  });
});

describe('Input test', () => {
  test('input takes the entered value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Bobbi' } });
    expect(input.value).toBe('Bobbi');
  });
});
