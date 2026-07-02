const stats = [
  { label: 'Happy Customers', value: '24k+' },
  { label: 'Products Added', value: '1.2k' },
  { label: 'Average Rating', value: '4.8/5' },
];

function StatsSection() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
