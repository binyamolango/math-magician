import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiKey = 'qqoMXsAord0KkBJuAevFSw==E3XSAIz6orWVAcZM';
    const category = 'health';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <h2>Random Quotes</h2>
      <p>{quote.quote}</p>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};

export default Quotes;
