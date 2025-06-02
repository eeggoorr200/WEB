import React from 'react';

const Numbers = ({ number }) => {
  return (
    <div style={{
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {number}
    </div>
  );
};

export default Numbers;