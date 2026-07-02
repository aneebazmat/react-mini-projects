import { useState } from 'react';

function RandomColorGenerator() {
  const [color, setColor] = useState('#4f46e5');
  const [mode, setMode] = useState('hex');

  const generateColor = () => {
    if (mode === 'hex') {
      const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
      setColor(randomColor);
      return;
    }

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <section className="demo-card">
      <div className="demo-heading">
        <h2>2. Random Color Generator</h2>
        <p>Generate a random hex or rgb color.</p>
      </div>

      <div className="color-generator">
        <div className="color-preview" style={{ backgroundColor: color }} />
        <div className="color-actions">
          <button type="button" className="primary-btn" onClick={generateColor}>
            Generate {mode.toUpperCase()}
          </button>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
          </select>
        </div>
        <p className="color-value">Current color: {color}</p>
      </div>
    </section>
  );
}

export default RandomColorGenerator;
