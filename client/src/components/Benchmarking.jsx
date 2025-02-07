// // components/Benchmarking.jsx
// const Benchmarking = ({ userData }) => {
//     // Compare user data with industry averages
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-sm">
//         <h3 className="text-xl font-semibold mb-4">Industry Benchmarking</h3>
//         {/* Comparison charts */}
//       </div>
//     );
//   };
  

//   export default Benchmarking;


// components/Benchmarking.jsx
import React, { useState, useEffect } from 'react';
import apiRequest from '../lib/apiRequest';

const Benchmarking = ({ userData }) => {
  const [benchmarkData, setBenchmarkData] = useState(null);

  useEffect(() => {
    const fetchBenchmark = async () => {
      try {
        const response = await apiRequest.post('/benchmark', {
          totalEnergy: userData.totalEnergy,
          squareFootage: userData.squareFootage
        });
        setBenchmarkData(response.data);
      } catch (error) {
        console.error('Benchmark error:', error);
      }
    };

    if (userData) {
      fetchBenchmark();
    }
  }, [userData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Industry Benchmarking</h3>
      {benchmarkData && (
        <div>
          <p>Your EUI: {benchmarkData.currentEUI}</p>
          <p>Industry Average: {benchmarkData.averageEUI}</p>
          <p>Performance: {benchmarkData.comparisonPercentage}% 
            {benchmarkData.comparisonPercentage > 0 ? 'above' : 'below'} average
          </p>
        </div>
      )}
    </div>
  );
};

export default Benchmarking;
