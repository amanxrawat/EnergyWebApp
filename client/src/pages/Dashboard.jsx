// // Dashboard.jsx
// import React, { useContext, useEffect, useState } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';
// import { Switch } from '@headlessui/react';
// import { AuthContext } from '../context/AuthContext';
// import Sidebar from '../components/Sidebar';
// import apiRequest from '../lib/apiRequest';

// const Dashboard = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [devices, setDevices] = useState([]);
//   const [rooms, setRooms] = useState([
//     { name: 'Kitchen', devices: 8, icon: '🍳' },
//     { name: 'Living Room', devices: 12, icon: '🛋️' },
//     { name: 'Bedroom', devices: 4, icon: '🛏️' },
//     { name: 'Bathroom', devices: 3, icon: '🚿' }
//   ]);

//   // Energy usage data
//   const energyData = {
//     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     datasets: [{
//       label: 'Energy Usage',
//       data: [30, 35, 25, 40, 30, 35, 28],
//       borderColor: 'rgb(147, 51, 234)',
//       backgroundColor: 'rgba(147, 51, 234, 0.5)',
//       tension: 0.3
//     }]
//   };

//   // Humidity data
//   const humidityData = {
//     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     datasets: [{
//       label: 'Humidity Level',
//       data: [24, 33, 29, 35, 24, 40, 35],
//       borderColor: 'rgb(59, 130, 246)',
//       backgroundColor: 'rgba(59, 130, 246, 0.5)',
//       tension: 0.3
//     }]
//   };

//   const [members] = useState([
//     { name: 'Jaquline', access: 'Full Access', image: 'path_to_image' },
//     { name: 'Sennorita', access: 'Limited Access', image: 'path_to_image' },
//     { name: 'Firoz', access: 'Full Access', image: 'path_to_image' }
//   ]);

//   useEffect(() => {
//     const fetchDevices = async () => {
//       try {
//         const response = await apiRequest.get('/devices');
//         setDevices(response.data);
//       } catch (error) {
//         console.error('Error fetching devices:', error);
//       }
//     };

//     fetchDevices();
//   }, []);

//   const toggleDevice = async (deviceId) => {
//     try {
//       const response = await apiRequest.post(`/devices/toggle/${deviceId}`);
//       setDevices(devices.map(device => 
//         device._id === deviceId ? response.data : device
//       ));
//     } catch (error) {
//       console.error('Error toggling device:', error);
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-6 bg-gray-50">
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-2xl font-bold">Hello {currentUser?.fullname} 👋</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <input 
//               type="search"
//               placeholder="Search Anything Here..."
//               className="px-4 py-2 rounded-lg border bg-white"
//             />
//           </div>
//         </div>

//         {/* Rooms Section */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Rooms</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {rooms.map((room) => (
//               <div key={room.name} 
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                 <div className="flex items-center space-x-4">
//                   <span className="text-2xl">{room.icon}</span>
//                   <div>
//                     <h3 className="font-medium">{room.name}</h3>
//                     <p className="text-sm text-gray-500">{room.devices} Devices</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium">Humidity</h3>
//               <select className="text-sm border rounded-lg px-2 py-1">
//                 <option>Today</option>
//                 <option>This Week</option>
//                 <option>This Month</option>
//               </select>
//             </div>
//             <Line data={humidityData} />
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium">Energy</h3>
//               <select className="text-sm border rounded-lg px-2 py-1">
//                 <option>Week</option>
//                 <option>Month</option>
//                 <option>Year</option>
//               </select>
//             </div>
//             <Bar data={energyData} />
//           </div>
//         </div>

//         {/* Devices Section */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Devices</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {['Air Conditioner', 'Smart TV', 'Coffee Machine', 'Refrigerator'].map((device) => (
//               <div key={device} className="bg-white p-6 rounded-xl shadow-sm">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-medium">{device}</h3>
//                   <Switch
//                     checked={device === 'Smart TV' || device === 'Refrigerator'}
//                     onChange={() => {}}
//                     className={`${
//                       device === 'Smart TV' || device === 'Refrigerator' 
//                         ? 'bg-blue-600' 
//                         : 'bg-gray-200'
//                     } relative inline-flex h-6 w-11 items-center rounded-full`}
//                   >
//                     <span className="sr-only">Toggle {device}</span>
//                     <span
//                       className={`${
//                         device === 'Smart TV' || device === 'Refrigerator' 
//                           ? 'translate-x-6' 
//                           : 'translate-x-1'
//                       } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                     />
//                   </Switch>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Members Section */}
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Members</h2>
//             <button className="text-blue-600 hover:text-blue-800">View all</button>
//           </div>
//           <div className="space-y-4">
//             {members.map((member) => (
//               <div key={member.name} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
//                   <div>
//                     <h3 className="font-medium">{member.name}</h3>
//                     <p className="text-sm text-gray-500">{member.access}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <button className="w-full py-2 mt-4 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
//               Add Member
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// Dashboard.jsx
// import React, { useContext, useState } from 'react';
// import {
//   Chart as ChartJS,
//   LineElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';
// import { AuthContext } from '../context/AuthContext';
// import { Switch } from '@headlessui/react';

// ChartJS.register(
//   LineElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );


// const Dashboard = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('home');

//   // Smart Meter Data
//   const energyData = {
//     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     datasets: [{
//       label: 'Energy Usage (kWh)',
//       data: [8, 12, 9, 14, 10, 13, 11],
//       borderColor: '#4F46E5',
//       backgroundColor: 'rgba(79, 70, 229, 0.1)',
//       fill: true
//     }]
//   };

//   const rooms = [
//     { id: 'kitchen', name: 'Kitchen', devices: 8, icon: '🍳' },
//     { id: 'living', name: 'Living Room', devices: 12, icon: '🛋️' },
//     { id: 'bedroom', name: 'Bedroom', devices: 4, icon: '🛏️' },
//     { id: 'bathroom', name: 'Bathroom', devices: 3, icon: '🚿' }
//   ];

//   const devices = [
//     { id: 1, name: 'Air Conditioner', status: false, icon: '❄️' },
//     { id: 2, name: 'Smart TV', status: true, icon: '📺' },
//     { id: 3, name: 'Coffee Machine', status: false, icon: '☕' },
//     { id: 4, name: 'Refrigerator', status: true, icon: '🧊' }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-sm p-4">
//         <div className="flex items-center space-x-3 mb-8">
//           <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
//             👤
//           </div>
//           <div>
//             <p className="font-medium">Hello 👋</p>
//             <p className="text-sm text-gray-600">{currentUser?.fullname}</p>
//           </div>
//         </div>

//         <nav className="space-y-2">
//           {['Home', 'Insights', 'Recommends', 'Messages', 'Profile', "FAQ's", 'Contact us'].map(item => (
//             <button
//               key={item}
//               className={`w-full text-left px-4 py-2 rounded-lg ${
//                 activeTab === item.toLowerCase() ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
//               }`}
//               onClick={() => setActiveTab(item.toLowerCase())}
//             >
//               {item}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto p-6">
//         {/* Search Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="search"
//             placeholder="Search Anything Here..."
//             className="w-96 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-200 focus:outline-none"
//           />
//           <div className="flex items-center space-x-4">
//             <Switch
//               checked={true}
//               onChange={() => {}}
//               className="bg-indigo-600 relative inline-flex h-6 w-11 items-center rounded-full"
//             >
//               <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
//             </Switch>
//           </div>
//         </div>

//         {/* Rooms Grid */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           {rooms.map(room => (
//             <div key={room.id} className="bg-white p-4 rounded-xl shadow-sm">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">{room.icon}</span>
//                 <div>
//                   <h3 className="font-medium">{room.name}</h3>
//                   <p className="text-sm text-gray-500">{room.devices} Devices</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <h3 className="font-medium mb-4">Humidity</h3>
//             <Line data={energyData} />
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <h3 className="font-medium mb-4">Energy</h3>
//             <Bar data={energyData} />
//           </div>
//         </div>

//         {/* Devices */}
//         <div className="grid grid-cols-4 gap-4">
//           {devices.map(device => (
//             <div key={device.id} className="bg-white p-4 rounded-xl shadow-sm">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center space-x-3">
//                   <span className="text-xl">{device.icon}</span>
//                   <span className="font-medium">{device.name}</span>
//                 </div>
//                 <Switch
//                   checked={device.status}
//                   onChange={() => {}}
//                   className={`${
//                     device.status ? 'bg-indigo-600' : 'bg-gray-200'
//                   } relative inline-flex h-6 w-11 items-center rounded-full`}
//                 >
//                   <span className={`${
//                     device.status ? 'translate-x-6' : 'translate-x-1'
//                   } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
//                 </Switch>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// pages/Dashboard.jsx
import PropTypes from 'prop-types';
import RealTimeEnergyChart from '../components/RealTimeEnergyChart';
import CostProjection from '../components/CostProjection';
import Sidebar from '../components/Sidebar';
import Benchmarking from '../components/Benchmarking';
import React, { useContext, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { AuthContext } from '../context/AuthContext';
import RecommendationsList from '../components/RecommendationsList';
import { Switch } from '@headlessui/react';
import { QuickStat } from '../components/QuickStat';
import apiRequest from '../lib/apiRequest';

// import {currentEnergyData} from '../data/currentEnergyData';

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// const Dashboard = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [currentEnergyData, setCurrentEnergyData] = useState(0);
//   const [goals, setGoals] = useState([]);
//   const [newGoal, setNewGoal] = useState('');

//   const [userData, setUserData] = useState({
//     totalEnergy: 0,
//     squareFootage: 0
//   });

//    // Fetch energy data when component mounts
//    useEffect(() => {
//     const fetchEnergyData = async () => {
//       try {
//         const response = await apiRequest.get('/api/energy-data/current');
//         setCurrentEnergyData(response.data.consumption);
//       } catch (error) {
//         console.error('Error fetching energy data:', error);
//       }
//     };
//     fetchEnergyData();
//   }, []);

//   // Energy Data for Charts
//   const energyData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: 'Energy Consumption (kWh)',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }]
//   };

//   // Recommendations Data
//   const recommendations = [
//     { id: 1, title: 'LED Lighting Upgrade', savings: '15%', cost: '$$' },
//     { id: 2, title: 'HVAC Optimization', savings: '20%', cost: '$$$' }
//   ];

//   // Handle Goal Submission
//   const handleGoalSubmit = async (e) => {
//     e.preventDefault();
//     if (newGoal.trim()) {
//       try {
//         const response = await apiRequest.post('/goals', {
//           description: newGoal,
//           target: 15 // Example target reduction percentage
//         });
//         setGoals([...goals, response.data]);
//         setNewGoal('');
//       } catch (error) {
//         console.error('Error saving goal:', error);
//       }
//     }
//   };

//   return (
                              // use above




    // <div className="min-h-screen bg-gray-50">
    //   <div className="container mx-auto px-4 py-8">
    //     <h1 className="text-3xl font-bold mb-8">Welcome, {currentUser?.fullname}</h1>
        
    //     {/* Quick Stats */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    //       <div className="bg-white p-6 rounded-lg shadow-sm">
    //         <h3 className="text-xl font-semibold mb-2">Current Consumption</h3>
    //         <p className="text-2xl">850 kWh</p>
    //       </div>
    //       <div className="bg-white p-6 rounded-lg shadow-sm">
    //         <h3 className="text-xl font-semibold mb-2">Monthly Target</h3>
    //         <p className="text-2xl text-green-600">15% Reduction</p>
    //       </div>
    //       <div className="bg-white p-6 rounded-lg shadow-sm">
    //         <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
    //         <p className="text-2xl">$1,200</p>
    //       </div>
    //     </div>

    //     {/* Energy Chart */}
    //     <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
    //       <h2 className="text-2xl font-semibold mb-4">Weekly Energy Consumption</h2>
    //       <Line data={energyData} />
    //     </div>

    //     {/* Recommendations */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    //       <div className="bg-white p-6 rounded-lg shadow-sm">
    //         <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
    //         <div className="space-y-4">
    //           {recommendations.map(rec => (
    //             <div key={rec.id} className="border-l-4 border-green-500 pl-4">
    //               <h3 className="font-semibold">{rec.title}</h3>
    //               <p>Estimated Savings: {rec.savings}</p>
    //               <p>Implementation Cost: {rec.cost}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Goal Tracking */}
    //       <div className="bg-white p-6 rounded-lg shadow-sm">
    //         <h2 className="text-2xl font-semibold mb-4">Goal Tracking</h2>
    //         <form onSubmit={handleGoalSubmit} className="mb-4">
    //           <input
    //             type="text"
    //             value={newGoal}
    //             onChange={(e) => setNewGoal(e.target.value)}
    //             placeholder="Set new energy saving goal"
    //             className="w-full p-2 border rounded-lg mb-2"
    //           />
    //           <button 
    //             type="submit"
    //             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    //           >
    //             Add Goal
    //           </button>
    //         </form>
    //         <div className="space-y-2">
    //           {goals.map((goal, index) => (
    //             <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
    //               <span>{goal.description}</span>
    //               <div className="w-1/4 bg-gray-200 rounded h-2">
    //                 <div 
    //                   className="bg-green-500 h-2 rounded" 
    //                   style={{ width: `${Math.min(goal.progress, 100)}%` }}
    //                 ></div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      // --------------------use below
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-6 bg-gray-50">
//         {/* Real-time Chart Section */}
//         <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
//           <h3 className="text-xl font-semibold mb-4">Real-Time Energy Monitoring</h3>
//           <RealTimeEnergyChart />
//         </div>

//         {/* Benchmarking Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="text-xl font-semibold mb-4">Building Benchmarking</h3>
//             <Benchmarking userData={userData} />
//             {/* Benchmarking component */}
//           </div>
          
//           <CostProjection currentConsumption={currentEnergyData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// const Dashboard = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [currentEnergyData, setCurrentEnergyData] = useState(0);
//   const [userData, setUserData] = useState({
//     totalEnergy: 1000, // Example default value
//     squareFootage: 5000 // Example default value
//   });
//   const [energyData, setEnergyData] = useState({
//     daily: [],
//     monthly: [],
//     yearly: []
//   });

//   const [goals, setGoals] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [energyRes, goalsRes, recsRes] = await Promise.all([
//           apiRequest.get('/energy-data/summary'),
//           apiRequest.get('/goals'),
//           apiRequest.get('/recommendations')
//         ]);

//         setEnergyData(energyRes.data);
//         setGoals(goalsRes.data);
//         setRecommendations(recsRes.data);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-6 bg-gray-50">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold">Welcome, {currentUser?.fullname}</h1>
//         </div>

//         {/* Real-time Chart */}
//         <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
//           <h3 className="text-xl font-semibold mb-4">Real-Time Energy Monitoring</h3>
//           <RealTimeEnergyChart />
//         </div>

//         {/* Benchmarking and Cost Projection */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Benchmarking userData={userData} />
//           <CostProjection currentConsumption={currentEnergyData} />
//         </div>
//       </div>
//     </div>
//   );
// };


const EnergyUsageChart = ({ data }) => {
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Energy Usage (kWh)'
        }
      }
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12 // Smaller font on mobile
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      }
    }
  };

  const chartData = {
    labels: data?.map(d => d.date) || [],
    datasets: [{
      label: 'Daily Energy Usage',
      data: data?.map(d => d.usage) || [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="h-[300px]"> {/* Fixed height container */}
      <Line data={chartData} options={options} />
    </div>
  );
};

EnergyUsageChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      usage: PropTypes.number
    })
  )
};

EnergyUsageChart.defaultProps = {
  data: []
};

const CostProjectionChart = ({ data }) => {
  const chartData = {
    labels: data?.map(d => `${d._id?.month}/${d._id?.year}`) || [],
    datasets: [{
      label: 'Monthly Cost',
      data: data?.map(d => d.usage * 0.12) || [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
    }]
  };

  return <Bar data={chartData} />;
};

CostProjectionChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        month: PropTypes.number,
        year: PropTypes.number
      }),
      usage: PropTypes.number
    })
  )
};

CostProjectionChart.defaultProps = {
  data: []
};

const GoalTracker = ({ goals }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Energy Goals</h2>
      <div className="space-y-4">
        {goals?.map((goal, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{goal.description}</span>
            <div className="w-1/3 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

GoalTracker.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      progress: PropTypes.number
    })
  )
};

GoalTracker.defaultProps = {
  goals: []
};

// Add calculateSavings function
const calculateSavings = (energyData) => {
  const currentUsage = energyData.monthly[0]?.usage || 0;
  const previousUsage = energyData.monthly[1]?.usage || 0;
  const savingsKwh = previousUsage - currentUsage;
  return (savingsKwh * 0.12).toFixed(2); // Assuming $0.12 per kWh
};



const Dashboard = () => {
  const [energyData, setEnergyData] = useState({
    daily: [],
    monthly: [],
    yearly: []
  });
  const [goals, setGoals] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [energyRes, goalsRes, recsRes] = await Promise.all([
          apiRequest.get('/energy-data/summary'),
          apiRequest.get('/goals'),
          apiRequest.get('/recommendations')
        ]);

        setEnergyData(energyRes.data);
        setGoals(goalsRes.data);
        setRecommendations(recsRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickStat 
            title="Today's Usage"
            value={`${energyData.daily[0]?.usage || 0} kWh`}
            change={energyData.daily[0]?.change || 0}
          />
          <QuickStat 
            title="Monthly Usage"
            value={`${energyData.monthly[0]?.usage || 0} kWh`}
            change={energyData.monthly[0]?.change || 0}
          />
          <QuickStat 
            title="Cost Savings"
            value={`$${calculateSavings(energyData)}`}
            type="currency"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <EnergyUsageChart data={energyData.daily} />
          <CostProjectionChart data={energyData.monthly} />
        </div>

        {/* Recommendations & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecommendationsList recommendations={recommendations} />
          <GoalTracker goals={goals} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;


