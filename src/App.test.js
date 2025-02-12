import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const portfolioElement = screen.getByText(/Portfolio/i);
  expect(portfolioElement).toBeInTheDocument();
});
