// pages/EnergyInput.jsx
// pages/EnergyInput.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import apiRequest from '../lib/apiRequest';


const EnergyInput = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    usage: '',
    buildingType: '',
    squareFootage: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiRequest.post('/energy-data/add', formData);
      toast.success('Energy data added successfully');
    } catch (error) {
      toast.error('Failed to add energy data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="date" 
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
      />
      <input 
        type="number" 
        placeholder="Energy Usage (kWh)"
        value={formData.usage}
        onChange={(e) => setFormData({...formData, usage: e.target.value})}
      />
      {/* Add other form fields */}
    </form>
  );
};

  

  export default EnergyInput;