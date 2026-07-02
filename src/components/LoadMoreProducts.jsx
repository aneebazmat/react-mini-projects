import { useEffect, useState } from 'react';

function LoadMoreProducts() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count * 10}`);
        const data = await response.json();
        setProducts((prev) => [...prev, ...data.products]);
        setTotal(data.total);
      } catch (error) {
        console.error('Failed to load products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= total && total > 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [products, total]);

  return (
    <section className="demo-card">
      <div className="demo-heading">
        <h2>5. Load More Products</h2>
        <p>Load batches of products dynamically from the API.</p>
      </div>

      <div className="products-grid compact-grid">
        {products.map((item) => (
          <article className="product-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="product-image" />
            <h3>{item.title}</h3>
            <p>{item.brand}</p>
            <strong>${item.price}</strong>
          </article>
        ))}
      </div>

      {loading && products.length === 0 ? (
        <p className="color-value">Loading products...</p>
      ) : (
        <div className="load-more-container">
          <button
            type="button"
            className="primary-btn"
            onClick={() => setCount((prev) => prev + 1)}
            disabled={disableButton}
          >
            {disableButton ? 'No more products' : 'Load More Products'}
          </button>
        </div>
      )}
    </section>
  );
}

export default LoadMoreProducts;
