// // frontend/src/components/RealTimeEnergyChart.jsx
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import useWebSocket from 'react-use-websocket';

// const RealTimeEnergyChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [{
//       label: 'Real-time Energy Usage (kW)',
//       data: [],
//       borderColor: '#3b82f6',
//       fill: false
//     }]
//   });

//   const { lastJsonMessage } = useWebSocket('ws://localhost:8080', {
//     onOpen: () => console.log('Connected to WebSocket'),
//     shouldReconnect: () => true,
//   });

//   useEffect(() => {
//     if (lastJsonMessage) {
//       setChartData(prev => ({
//         labels: [...prev.labels, new Date().toLocaleTimeString()],
//         datasets: [{
//           ...prev.datasets[0],
//           data: [...prev.datasets[0].data, lastJsonMessage.value]
//         }]
//       }));
//     }
//   }, [lastJsonMessage]);

//   return <Line data={chartData} />;
// };


// export default RealTimeEnergyChart;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const RealTimeEnergyChart = () => {
  const [chartData, setChartData] = useState({
    labels: Array.from({length: 24}, (_, i) => `${i}:00`),
    datasets: [{
      label: 'Real-time Energy Usage (kW)',
      data: Array.from({length: 24}, () => Math.random() * 1),
      borderColor: '#3b82f6',
      tension: 0.3
    }]
  });

  return (
    <div className="w-full h-[300px]">
      <Line data={chartData} options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
};

export default RealTimeEnergyChart;
