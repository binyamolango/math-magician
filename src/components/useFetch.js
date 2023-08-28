import { useState, useEffect } from 'react';

const useFetch = (category, API_KEY, baseURL) => {
  const [data, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(baseURL + category, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data!');
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
  }, [category, API_KEY, baseURL]);

  return { data, loading, error };
};

export default useFetch;
