import { render, screen } from '@testing-library/react';
import useFetch from '../useFetch';
import Quotes from '../Quotes';

jest.mock('../useFetch', () => jest.fn()); // Mock the useFetch hook

describe('Quotes', () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: {
        quote: 'Test Quote',
        author: 'Test Author',
      },
      loading: false,
      error: null,
    });

    render(<Quotes />);
  });

  it('should render the quote and author', () => {
    const quoteElement = screen.getByText(/Test Quote/);
    const authorElement = screen.getByText(/Test Author/);

    expect(quoteElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });

  it('should display loading message if loading is true', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<Quotes />);

    const loadingElement = screen.getByText(/loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  it('should display error message if error is present', () => {
    const errorMessage = 'Error fetching quotes';
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: errorMessage,
    });

    render(<Quotes />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should display loading message when data is null during loading state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<Quotes />);

    const loadingElement = screen.getByText(/loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
