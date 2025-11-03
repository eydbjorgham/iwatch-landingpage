'use client';
import { useState } from "react";

const Circles = ({ onWatchChange, currentWatch }) => {
  const [activeWatch, setActiveWatch] = useState('navy');

  
  return (
    <div className="watch-indicators">
      <span className={`indicator navy ${currentWatch === 'navy' ? 'active' : ''}`}
      onClick={() => onWatchChange('navy')} />
      <span className="connector" />
      <span className={`indicator mint ${currentWatch === 'mint' ? 'active' : ''}`}
      onClick={() => onWatchChange('mint')} />
      <span className="connector" />
      <span className={`indicator pink ${currentWatch === 'pink' ? 'active' : ''}`}
      onClick={() => onWatchChange('pink')} />
    </div>
  );
};

export default Circles;
