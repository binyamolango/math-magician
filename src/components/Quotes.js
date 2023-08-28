import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    const API_KEY = 'qqoMXsAord0KkBJuAevFSw==E3XSAIz6orWVAcZM';
    const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=';

    fetch(baseURL + category, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data!');
        }
        return res.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="quote-display container">
      <h1>Random Quotes</h1>
      { loading && <div>loading...</div> }
      { error && <div>{error}</div> }
      <quote className="quote">
        { quote.quote }
      </quote>
      <p className="author">
        -
        { quote.author }
      </p>
    </div>
  );
};

export default Quotes;
