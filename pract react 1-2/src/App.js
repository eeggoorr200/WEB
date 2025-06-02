import React from 'react';

const App = () => {
  const stocks = [
    {
      stock_name: "EFX",
      company_name: "Equifax Inc",
      price: 163.55,
      currency: "USD",
      change: "+9.03"
    }, {
      stock_name: "IRM",
      company_name: "Iron Mountain Inc",
      price: 33.21,
      currency: "USD",
      change: "+1.42"
    }, {
      stock_name: "NTAP",
      company_name: "NetApp Inc",
      price: 54.81,
      currency: "USD",
      change: "-6.01"
    }, {
      stock_name: "CTL",
      company_name: "Centurylink Inc",
      price: 13.79,
      currency: "USD",
      change: "-1.37"
    }
  ];

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#d1d1d1' }}>
            <th style={{ padding: '8px', border: '1px solid black' }}>stock_name</th>
            <th style={{ padding: '8px', border: '1px solid black' }}>company_name</th>
            <th style={{ padding: '8px', border: '1px solid black' }}>price</th>
            <th style={{ padding: '8px', border: '1px solid black' }}>currency</th>
            <th style={{ padding: '8px', border: '1px solid black' }}>change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>{stock.stock_name}</td>
              <td style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>{stock.company_name}</td>
              <td style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>{stock.price}</td>
              <td style={{ padding: '8px', textAlign: 'center', border: '1px solid black'  }}>{stock.currency}</td>
              <td style={{ 
                padding: '8px', 
                textAlign: 'center', 
                border: '1px solid black',
                color: stock.change > 0 ? 'green' : 'red'
              }}>
                {stock.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;