import { useEffect, useState } from 'react';

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Failed to load images', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return <section className="demo-card"><p>Loading images...</p></section>;
  }

  if (!images.length) {
    return <section className="demo-card"><p>No images available.</p></section>;
  }

  const currentImage = images[currentIndex];

  return (
    <section className="demo-card">
      <div className="demo-heading">
        <h2>4. Image Slider</h2>
        <p>Browse through images fetched from Picsum.</p>
      </div>

      <div className="slider-card">
        <img src={currentImage.download_url} alt={currentImage.author} className="slider-image" />
        <div className="slider-controls">
          <button type="button" className="secondary-btn" onClick={showPrev}>Previous</button>
          <span>{currentIndex + 1} / {images.length}</span>
          <button type="button" className="primary-btn" onClick={showNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
