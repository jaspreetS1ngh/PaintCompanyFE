// ColorList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorInfo from './ColorInfo';

const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphczMiLCJyb2xlIjoicGFpbnRlciIsImlhdCI6MTcxMTM0NzM5Mn0.ZLtSDlEjIhMXxlJ3zxnYlqAYfbCudftOwWAqw0xO9aU'; // Retrieve token from storage
        const response = await axios.get('http://localhost:3030/inventory', {
          headers: {
            Authorization: `Bearer ${token}` // Include token in the request headers
          }
        });
        setColors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColors();
  }, []);

  return (
    <div>
      <h1>Colors</h1>
      {colors.map(color => (
        <ColorInfo key={color.id} {color.color} />
      ))}
    </div>
  );
};

export default ColorList;
