import { useState, useEffect } from 'react';

const Quotes = () => {
  const category = 'happiness';
  const API_KEY = 'qqoMXsAord0KkBJuAevFSw==E3XSAIz6orWVAcZM';
  const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=';

  const [data, setQuote] = useState({ quote: null, author: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + category, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error('Could not fetch the data!');
        }

        const data = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="quote-display container">
      <h1 className="quote-title">Random Quotes</h1>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data.quote && data.author && (
        <p className="quote">
          {data.quote}
          {' '}
          -
          {data.author}
        </p>
      )}
    </div>
  );
};

export default Quotes;
