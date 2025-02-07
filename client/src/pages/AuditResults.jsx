// // pages/AuditResults.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import apiRequest from '../lib/apiRequest';

// const AuditResults = () => {
//   const { id } = useParams();
//   const [auditData, setAuditData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAuditResults = async () => {
//       try {
//         const response = await apiRequest.get(`/audits/${id}`);
//         setAuditData(response.data);
//       } catch (error) {
//         console.error('Error fetching audit results:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAuditResults();
//   }, [id]);

//   if (loading) return <div>Loading audit results...</div>;
//   if (!auditData) return <div>Audit not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6">Energy Audit Results</h1>
      
//       <div className="space-y-4">
//         <div className="bg-gray-50 p-4 rounded">
//           <h2 className="text-xl font-semibold mb-2">Building Details</h2>
//           <p>Type: {auditData.buildingType}</p>
//           <p>Square Footage: {auditData.squareFootage} ft²</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded">
//           <h2 className="text-xl font-semibold mb-2">Systems Analysis</h2>
//           <p>HVAC System: {auditData.hvacSystem.type}</p>
//           <p>System Age: {auditData.hvacSystem.age} years</p>
//           <p>LED Lighting: {auditData.lighting.ledPercentage}%</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded">
//           <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
//           <ul className="list-disc pl-6">
//             {auditData.recommendations?.map((rec, index) => (
//               <li key={index} className="mb-2">
//                 <h3 className="font-medium">{rec.title}</h3>
//                 <p>Estimated Savings: {rec.savings}</p>
//                 <p>Implementation Cost: {rec.cost}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuditResults;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiRequest from '../lib/apiRequest';

const AuditResults = () => {
  const { id } = useParams();
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuditResults = async () => {
      try {
        const response = await apiRequest.get(`/audits/${id}`);
        if (!response.data) throw new Error('Audit not found');
        setAuditData({
          ...response.data,
          // Add default values for optional fields
          lighting: response.data.lighting || { ledPercentage: 0 },
          hvacSystem: response.data.hvacSystem || { type: '', age: 0 }
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuditResults();
  }, [id]);

  if (loading) return <div className="p-4">Loading audit results...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Energy Audit Results</h1>
      
      <div className="space-y-4">
        {/* Safe access with optional chaining */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Lighting Analysis</h2>
          <p>LED Percentage: {auditData.lighting?.ledPercentage ?? 'Not provided'}%</p>
</div>

        {/* Add error boundary for recommendations */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
          <ul className="list-disc pl-6">
            {(auditData.recommendations || []).map((rec, index) => (
              <li key={index} className="mb-2">
                <h3 className="font-medium">{rec.title || 'General Improvement'}</h3>
                <p>Estimated Savings: {rec.savings || 'N/A'}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuditResults;
