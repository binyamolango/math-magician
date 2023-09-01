import { render, screen, waitFor } from '@testing-library/react';
import Quotes from '../Quotes';

describe('Quotes component', () => {
  test('displays loading message initially', () => {
    render(<Quotes />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('displays random quote when fetch is successful', async () => {
    const mockData = [
      {
        quote: 'Test quote',
        author: 'Test author',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<Quotes />);

    await waitFor(() => {
      const quoteElement = screen.getByText(/Test quote.*-.*Test author/);
      expect(quoteElement).toBeInTheDocument();
    });
  });
});
