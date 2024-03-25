// ColorList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorInfo from './ColorInfo';

const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphczMiLCJyb2xlIjoicGFpbnRlciIsImlhdCI6MTcxMTM0OTIyOH0.XidJy-xegzD5ZyOiVTc5JxlYh-IhWLo2vAO3vJ8u6Qc'; 
        const response = await axios.get('http://localhost:3030/inventory', {
          headers: {
            Authorization: `Bearer ${token}` // Include token in the request headers
          }
        });
        console.log(response.data);
        setColors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColors();
  }, []);

  return (
    
        <div>
          <h1>Color List</h1>
          {colors.map((color, index) => (
            <ColorInfo key={index} {...color} />
          ))}
        </div>
      );
    };
    
    export default ColorList;
