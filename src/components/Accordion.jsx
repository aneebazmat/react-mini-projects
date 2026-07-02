import { useState } from 'react';

// Accordion App

function Accordion({ data = [] }) {
  const [openIds, setOpenIds] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const toggleItem = (itemId) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]));
      return;
    }

    setOpenIds((prev) => (prev.includes(itemId) ? [] : [itemId]));
  };

  return (
    <section className="demo-card">
      <div className="demo-heading">
        <h2>1. Accordion</h2>
        <p>{allowMultiple ? 'Multiple panels can stay open at once.' : 'Only one panel stays open at a time.'}</p>
      </div>

      <div className="accordion-toggle">
        <button type="button" className="secondary-btn" onClick={() => setAllowMultiple((prev) => !prev)}>
          {allowMultiple ? 'Switch to Single Accordion' : 'Switch to Multiple Accordion'}
        </button>
      </div>

      <div className="accordion-list">
        {data.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={item.id}>
              <button type="button" className="accordion-trigger" onClick={() => toggleItem(item.id)}>
                <span>{item.title}</span>
                <span>{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && <div className="accordion-content">{item.content}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Accordion;
