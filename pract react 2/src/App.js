import React, { useState, useEffect } from 'react';
import './App.css';

const Clock = ({ format, timezone }) => {
  const getFormattedTime = () => {
    const now = new Date();
    const localOffset = now.getTimezoneOffset() * 60000;
    let offsetMs = 0;

    if (timezone !== 'local') {
      const match = timezone.match(/([+-])(\d{1,2}):(\d{2})/);
      if (match) {
        const sign = match[1] === '+' ? 1 : -1;
        const hours = parseInt(match[2], 10);
        const minutes = parseInt(match[3], 10);
        offsetMs = sign * (hours * 60 + minutes) * 60000;
      }
    }

    const adjustedTime = new Date(now.getTime() + localOffset + offsetMs);
    let hours = adjustedTime.getHours();
    const minutes = adjustedTime.getMinutes().toString().padStart(2, '0');
    const seconds = adjustedTime.getSeconds().toString().padStart(2, '0');

    if (format === '12') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
  };

  const [time] = useState(getFormattedTime());


  return <div className="clock">{time}</div>;
};

const professionData = {
  Analyst: ['Tableau', 'Power BI', 'Google Data Studio', 'Excel', 'SQL Tutorial'],
  Writer: ['Grammarly', 'Hemingway Editor', 'Medium', 'ProWritingAid', 'Scrivener'],
  Photographer: ['500px', 'Flickr', 'Adobe Lightroom', 'Photoshop', 'Unsplash'],
  Chef: ['Allrecipes', 'Serious Eats', 'Food Network', 'Epicurious', 'ChefSteps'],
  Architect: ['ArchDaily', 'Dezeen', 'SketchUp', 'ArchiCAD', 'World Architecture Community'],
};

const JobSelector = ({ selected, onChange }) => (
  <div className="job-selector">
    <select value={selected} onChange={e => onChange(e.target.value)}>
      {Object.keys(professionData).map(prof => (
        <option key={prof} value={prof}>{prof}</option>
      ))}
    </select>
  </div>
);

const JobMenu = ({ profession }) => {
  const items = professionData[profession] || [];
  return (
    <div className="job-menu">
      <h3>{profession} resources:</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [profession, setProfession] = useState('Analyst');
  const [format, setFormat] = useState('24');
  const [timezone, setTimezone] = useState('+3:00');

  return (
    <div className="app">
      
      <div className="task">
        <h2>Задание 1</h2>
        <div className="controls">
          <select value={format} onChange={e => setFormat(e.target.value)}>
            <option value="24">24-hour</option>
            <option value="12">12-hour</option>
          </select>
          
          <select value={timezone} onChange={e => setTimezone(e.target.value)}>
            <option value="local">Local</option>
            <option value="-8:00">-8:00 (PST)</option>
            <option value="-5:00">-5:00 (EST)</option>
            <option value="+0:00">0:00 (GMT)</option>
            <option value="+3:00">+3:00 (MSK)</option>
          </select>
        </div>
        <Clock format={format} timezone={timezone} />
      </div>

      <div className="task">
        <h2>Задание 2</h2>
        <JobSelector selected={profession} onChange={setProfession} />
        <JobMenu profession={profession} />
      </div>
    </div>
  );
}

export default App;