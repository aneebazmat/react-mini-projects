import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <section className="demo-card">
      <div className="demo-heading">
        <h2>3. Star Rating</h2>
        <p>Hover and click to rate your experience.</p>
      </div>

      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= (hovered || rating);

          return (
            <button
            key={star}
              type="button"
              className={`star ${filled ? 'filled' : ''}`}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          );
        })}
      </div>
      <p className="color-value">Your rating: {rating} / 5</p>
    </section>
  );
}

export default StarRating;
