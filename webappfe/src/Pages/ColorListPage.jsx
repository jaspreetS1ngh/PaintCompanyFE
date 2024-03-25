// ColorListPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ColorListPage = () => {
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
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color, index) => (
            <tr key={index}>
              <td>{color.color}</td>
              <td>{color.quantity}</td>
              <td>{color.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorListPage;


