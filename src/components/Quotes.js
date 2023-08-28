import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const category = 'happiness';
    const API_KEY = 'qqoMXsAord0KkBJuAevFSw==E3XSAIz6orWVAcZM';
    const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=';

    fetch(baseURL + category, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (<div>loading...</div>);
  }

  return (
    <div className="quote-display container">
      <h1>Random Quotes</h1>
      <p className="quote">
        { quote.quote }
      </p>
      <p className="author">
        -
        { quote.author }
      </p>
    </div>
  );
};

export default Quotes;
