// ColorEditPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ColorEditPage = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColors();
  }, []);

  const handleEdit = async (id, newData) => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphczMiLCJyb2xlIjoicGFpbnRlciIsImlhdCI6MTcxMTM0OTIyOH0.XidJy-xegzD5ZyOiVTc5JxlYh-IhWLo2vAO3vJ8u6Qc'; 
      await axios.put(`http://localhost:3030/inventory/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    setColors(prevColors =>
      prevColors.map(color =>
        color.id === id ? { ...color, [name]: value } : color
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Color Data</h1>
      {colors.map((color) => (
        <div key={color.id}>
          <p>Color: {color.color}</p>
          <input
            type="number"
            name="quantity"
            value={color.quantity}
            onChange={(e) => handleInputChange(e, color.id)}
          />
          <input
            type="text"
            name="status"
            value={color.status}
            onChange={(e) => handleInputChange(e, color.id)}
          />
          <button onClick={() => handleEdit(color.id, color)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ColorEditPage;
