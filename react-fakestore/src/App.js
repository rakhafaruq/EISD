import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const processedProducts = data
          .map(product => ({
            ...product,
            price: product.price * 0.2,
          }))
          .filter(product => product.rating && product.rating.rate > 4.0);
          setProducts(processedProducts); 
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="App">
      <h1>FakeStore Products</h1>
      <ProductList products={products} /> 
    </div>
  );
}

export default App;
