import React from 'react';

const Letters = ({}) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  return (
    <div style={{ display: 'flex' }}>
      {letters.map((letter) => (
        <div 
          key={`${letter}`} 
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Letters;