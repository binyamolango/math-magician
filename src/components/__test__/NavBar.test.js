import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
  });
  it('should render the navbar with correct links and text', () => {
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
    const quoteLink = screen.getByRole('link', { name: 'Quote' });

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(calculatorLink.getAttribute('href')).toBe('/Calculator');
    expect(quoteLink.getAttribute('href')).toBe('/Quotes');

    expect(homeLink.textContent).toBe('Home');
    expect(calculatorLink.textContent).toBe('Calculator');
    expect(quoteLink.textContent).toBe('Quote');
  });
});
