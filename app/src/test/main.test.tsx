import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Pokemon } from '../components/Pokemon';
import SearchBar from '../components/SearchBar';
import Form from '../components/Form/Form';
import userEvent from "@testing-library/user-event";

const testPokemon = {
  id: 25,
  name: 'Pikachu',
  typeList: ['Electric'],
  img: 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif',
};

const setupSearchBar = () => {
  const searchBar = render(<SearchBar />);
  const input = screen.getByTestId('search-bar') as HTMLInputElement;
  return {
    input,
    ...searchBar,
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
    const { input } = setupSearchBar();
    fireEvent.change(input, { target: { value: 'Bobbi' } });
    expect(input.value).toBe('Bobbi');
  });
});

const setupForm = () => {
  const form = render(
    <Form />
  )
  const nameInput = screen.getByRole('name', {
    name: /poke name/i,
  });
  const dateInput = screen.getByRole('textbox', {
    name: /date of meeting/i,
  });
  const checkbox = screen.getByRole('spinbutton', {
    name: /project budget/i,
  });

  return {
    nameInput,
    dateInput,
    checkbox,
    ...form,
  };
};

it("should render the basic fields", () => {
  render(<Form />);
  expect(screen.getByRole("date", { name: /date/i })).toBeInTheDocument();
  expect(
    screen.getByRole("file", { name: /file-uploader/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("radio", { name: /shiny/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("region", { name: /region/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("submit", { name: /submut/i })).toBeInTheDocument();
});

// it("should show error message when all the fields are not entered", async () => {
//   render(<Form/>);
//   const buttonElement = screen.getByRole("button", {
//     name: /register/i
//   });
//   await userEvent.click(buttonElement);
//   const alertElement = screen.getByRole("alert");
//   expect(alertElement).toBeInTheDocument();
// });

it("changes the value when passing a pickedValue as props: ", () => {
  const testValue = "2020-12-10";

  const date = render(
    <Date />
  );
  const input = getByTestId("date-picker").getElementsByTagName("input")[0];

  rerender(<Date  value={testValue} />);

  expect(input.value).toBe(testValue);
});
