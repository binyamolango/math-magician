import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('the home should be displayed properly', () => {
    render(<Home />);
    const homeElement = screen.getByText('Welcome to our page!');
    expect(homeElement).toBeInTheDocument();
  });
});
