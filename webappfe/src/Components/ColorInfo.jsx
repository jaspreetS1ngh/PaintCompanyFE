import React from 'react';

const ColorInfo = ({ color, quantity, status }) => {
  return (
    <div>
      <h3>{color}</h3>
      <p>Quantity: {quantity}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ColorInfo;
