// // import React, { useState } from 'react';

// // const EnergyInputForm = () => {
// //   const [formData, setFormData] = useState({
// //     electricity: '',
// //     gas: '',
// //     date: ''
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // API call to /api/energy-data
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
// //       <h2 className="text-2xl font-bold mb-4">Energy Input Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="grid grid-cols-1 gap-4">
// //           <input
// //             type="number"
// //             placeholder="Electricity Usage (kWh)"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="number"
// //             placeholder="Gas Usage (therms)"
// //             className="p-2 border rounded"
// //           />
// //           <input
// //             type="date"
// //             className="p-2 border rounded"
// //           />
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //           >
// //             Submit Data
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };


// // export default EnergyInputForm;



// // components/EnergyInputForm.jsx
// import React, { useState } from 'react';
// import apiRequest from '../lib/apiRequest';
// import { toast } from 'react-toastify';

// const EnergyInputForm = () => {
//   const [formData, setFormData] = useState({
//     buildingType: '',
//     squareFootage: '',
//     electricityUsage: '',
//     date: new Date().toISOString().split('T')[0]
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await apiRequest.post('/energy-data/add', formData);
//       toast.success('Energy data added successfully');
//     } catch (error) {
//       toast.error('Failed to add energy data');
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <h2 className="text-xl font-semibold mb-4">Enter Energy Data</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label>Building Type</label>
//           <select 
//             name="buildingType"
//             value={formData.buildingType}
//             onChange={(e) => setFormData({...formData, buildingType: e.target.value})}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select Type</option>
//             <option value="commercial">Commercial</option>
//             <option value="residential">Residential</option>
//             <option value="industrial">Industrial</option>
//           </select>
//         </div>
//         {/* Add other form fields */}
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EnergyInputForm;


// components/EnergyInputForm.jsx
import React, { useState } from 'react';
import apiRequest from '../lib/apiRequest';
import { toast } from 'react-toastify';

const EnergyInputForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    usage: '',
    buildingType: 'commercial', // Add default value
    squareFootage: '',
    time: new Date().toLocaleTimeString()
  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const dataToSubmit = {
//         date: formData.date,
//         usage: Number(formData.usage),
//         buildingType: formData.buildingType,
//         squareFootage: Number(formData.squareFootage)

//       };
      
//       await apiRequest.post('/energy-data/add', dataToSubmit);
//       toast.success('Energy data added successfully');
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error(error.response?.data?.message || 'Failed to add energy data');
//  // Clear form
//  setFormData({
//   ...formData,
//   usage: '',
//   squareFootage: ''
// });
   
// }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const dataToSubmit = {
      date: formData.date,
      usage: Number(formData.usage),
      buildingType: formData.buildingType,
      squareFootage: Number(formData.squareFootage)
    };
    
    await apiRequest.post('/energy-data/add', dataToSubmit);
    toast.success('Energy data added successfully');
    // Clear form
    setFormData({
      ...formData,
      usage: '',
      squareFootage: ''
    });
  } catch (error) {
    console.error('Error:', error);
    toast.error(error.response?.data?.message || 'Failed to add energy data');
  }
};



return (
  <div className="max-w-2xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Enter Energy Usage Data</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Building Type</label>
        <select
          value={formData.buildingType}
          onChange={(e) => setFormData({...formData, buildingType: e.target.value})}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Building Type</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
          <option value="industrial">Industrial</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Square Footage</label>
        <input
          type="number"
          value={formData.squareFootage}
          onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
          className="w-full p-2 border rounded"
          placeholder="Enter building square footage"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Energy Usage (kWh)</label>
        <input
          type="number"
          value={formData.usage}
          onChange={(e) => setFormData({...formData, usage: e.target.value})}
          className="w-full p-2 border rounded"
          placeholder="Enter energy consumption in kWh"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit Reading
      </button>
    </form>
  </div>
);
};
export default EnergyInputForm;