import React from 'react';
import Letters from './Letters';
import Numbers from './Numbers';

const ChessBoard = () => {
    const renderBoard = () => {

    const rows = 8;
    const cols = 8;
    const board = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const isBlack = (i + j) % 2 === 1;
        row.push(
          <div
            key={`${i}-${j}`}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: isBlack ? 'black' : 'white',
              border: '1px solid #333'
            }}
          ></div>
        );
      }
      board.push(
        <div key={`row-${i}`} style={{ display: 'flex' }}>
          <Numbers number={8 - i} />
          {row}
          <Numbers number={8 - i} />
        </div>
      );
    }

    return board;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px'
    }}>
      <Letters />
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {renderBoard()}
      </div>
      
      <Letters />
    </div>
  );
}

export default ChessBoard;