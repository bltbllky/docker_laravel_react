import { render, screen } from '@testing-library/react';
import App from './App';

test('Fully rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO LIST/i);
  expect(linkElement).toBeInTheDocument();
});
