// frontend/src/components/CostProjection.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import apiRequest from '../lib/apiRequest';

const CostProjection = ({ currentConsumption }) => {
  const [projectionData, setProjectionData] = useState(null);

  useEffect(() => {
    const calculateProjection = async () => {
      try {
        const response = await apiRequest.post('/api/cost-projection', {
          currentConsumption,
          reductionGoal: 15 // Percentage goal
        });
        setProjectionData(response.data);
      } catch (error) {
        console.error('Projection error:', error);
      }
    };
    
    if (currentConsumption) calculateProjection();
  }, [currentConsumption]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">5-Year Cost Projection</h3>
      {projectionData && (
        <Bar data={{
          labels: projectionData.years,
          datasets: [{
            label: 'Projected Savings',
            data: projectionData.savings,
            backgroundColor: '#10b981'
          }]
        }} />
      )}
    </div>
  );
};

export default CostProjection;