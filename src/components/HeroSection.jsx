function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div>
          <h1 className="hero-title">Discover the latest essentials for modern living.</h1>
          <p className="hero-copy">
            Explore a curated collection of trending products with premium quality and fast delivery.
          </p>
          <div className="hero-actions">
            <button className="hero-btn primary">Shop Now</button>
            <button className="hero-btn secondary">View Collection</button>
          </div>
        </div>
        <div className="hero-visual">
          <h3>Featured Picks</h3>
          <p>New arrivals, best sellers, and handcrafted favorites.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
