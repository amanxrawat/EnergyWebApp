import React, { useEffect, useState } from 'react';
import apiRequest from '../lib/apiRequest';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await apiRequest.get('/api/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">AI Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">{rec.title}</h3>
            <p>Potential Savings: {rec.savings}</p>
            <p>Implementation Cost: {rec.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;