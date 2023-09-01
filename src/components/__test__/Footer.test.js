import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('the footer should be displayed properly', () => {
    render(<Footer />);
    const footerElement = screen.getByText('@copyright');
    expect(footerElement).toBeInTheDocument();
  });
});
