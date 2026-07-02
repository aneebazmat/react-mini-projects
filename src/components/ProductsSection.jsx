function ProductsSection({ products, loading, disableButton, onLoadMore, total }) {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Trending Products</h2>
        {loading && products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <>
            <div className="products-grid">
              {products.map((item) => (
                <article className="product-card" key={item.id}>
                  <img className="product-image" src={item.thumbnail} alt={item.title} />
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-meta">{item.brand}</p>
                  <div className="product-price">${item.price}</div>
                </article>
              ))}
            </div>

            <div className="load-more-container">
              <button className="load-more-btn" disabled={disableButton} onClick={onLoadMore}>
                {disableButton ? 'You have reached 100 products' : 'Load More Products'}
              </button>
            </div>
            {disableButton && <p style={{ textAlign: 'center' }}>Showing all {total} products.</p>}
          </>
        )}
      </div>
    </section>
  );
}

export default ProductsSection;
