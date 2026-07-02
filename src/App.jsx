import Accordion from './components/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreProducts from './components/LoadMoreProducts';

const accordionData = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a JavaScript library for building interactive user interfaces.',
  },
  {
    id: 2,
    title: 'What is Node.js?',
    content: 'Node.js is a JavaScript runtime for building server-side applications.',
  },
  {
    id: 3,
    title: 'Why use Vite?',
    content: 'Vite offers fast development startup and instant Hot Module Replacement.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="page-header">
        <div className="container">
          <h1>Five React Mini Projects</h1>
          <p>Accordion, random color generation, star rating, image slider, and load-more products.</p>
        </div>
      </header>

      <main className="container showcase-grid">
        <Accordion data={accordionData} />
        <RandomColorGenerator />
        <StarRating />
        <ImageSlider />
        <LoadMoreProducts />
      </main>
    </div>
  );
}

export default App;
