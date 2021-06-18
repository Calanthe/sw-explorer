import { render, screen } from '@testing-library/react';
import App from './App';

test('renders proper menu links', () => {
  render(<App />);
  const charactersLink = screen.getByText(/Characters/i);
  expect(charactersLink).toBeInTheDocument();

  const moviesLink = screen.getByText(/Movies/i);
  expect(moviesLink).toBeInTheDocument();

  const starshipsLink = screen.getByText(/Starships/i);
  expect(starshipsLink).toBeInTheDocument();

  const planetsLink = screen.getByText(/Planets/i);
  expect(planetsLink).toBeInTheDocument();

  const vehiclesLink = screen.getByText(/Vehicles/i);
  expect(vehiclesLink).toBeInTheDocument();

  const speciesLink = screen.getByText(/Species/i);
  expect(speciesLink).toBeInTheDocument();
});
