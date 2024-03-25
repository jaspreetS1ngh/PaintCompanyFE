// ColorInfo.jsx
import React, { useState } from 'react';

const ColorInfo = ({ color, onQuantityUpdate }) => {
  const [quantity, setQuantity] = useState(color.quantity);

  const handleUpdate = () => {
    onQuantityUpdate(color.id, quantity);
  };

  return (
    <div>
      <h3>{color.color}</h3>
      <p>Quantity: <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></p>
      <button onClick={handleUpdate}>Update Quantity</button>
    </div>
  );
};

export default ColorInfo;
