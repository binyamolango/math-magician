import useFetch from './useFetch';

const Quotes = () => {
  const category = 'happiness';
  const API_KEY = 'qqoMXsAord0KkBJuAevFSw==E3XSAIz6orWVAcZM';
  const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=';

  const { data, loading, error } = useFetch(category, API_KEY, baseURL);

  return (
    <div className="quote-display container">
      <h1>Random Quotes</h1>
      { loading && <div>loading...</div> }
      { error && <div>{error}</div> }
      <quote className="quote">
        { data.quote }
      </quote>
      <p className="author">
        -
        { data.author }
      </p>
    </div>
  );
};

export default Quotes;
