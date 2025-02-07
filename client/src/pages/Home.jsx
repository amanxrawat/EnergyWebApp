// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Navigation */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white py-20">
//         <div className="text-center max-w-2xl px-4">
//           <h1 className="text-5xl font-bold mb-6">EcoWatt</h1>
//           <p className="text-xl mb-8">
//             Revolutionizing Energy Auditing with AI-powered Smart Metering.
//           </p>
//           <div className="space-x-4">
//             <Link
//               to="/login"
//               className="bg-white text-green-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-transparent text-white border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-500 transition"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">AI-powered Analysis</h3>
//               <p className="text-gray-600">
//                 Leverage AI to predict energy consumption, generate insights and synthetic recommendations.
//               </p>
//             </div>
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">Interactive Visualizations</h3>
//               <p className="text-gray-600">
//                 Real-time energy usage visualizations with charts and graphs for better decision-making.
//               </p>
//             </div>
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">Smart Meter Integration</h3>
//               <p className="text-gray-600">
//                 Monitor your consumption through virtual smart meter readings and cost projections.
//               </p>
//             </div>
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">Virtual Audit Questionnaire</h3>
//               <p className="text-gray-600">
//                 Conduct a comprehensive energy audit online and benchmark your building’s performance.
//               </p>
//             </div>
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">Goal Setting & Tracking</h3>
//               <p className="text-gray-600">
//                 Set energy-saving goals and track progress easily through our dynamic dashboard.
//               </p>
//             </div>
//             <div className="p-6 border rounded-lg hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">Dynamic Load Management</h3>
//               <p className="text-gray-600">
//                 Automatically balance load and optimize energy usage across devices.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why EcoWatt Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Why Choose EcoWatt?</h2>
//           <p className="text-gray-700 max-w-2xl mx-auto">
//             EcoWatt is a low-cost alternative to traditional energy audits offering rapid report generation, scalability for multiple buildings, and smooth integration with existing systems. Our solution automates data collection and analysis so you can reduce costs, improve efficiency, and lower your carbon footprint.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 py-6">
//         <div className="container mx-auto px-4 text-center text-white">
//           <p className="text-sm">&copy; {new Date().getFullYear()} EcoWatt. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;


// pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Smart Energy Management Made Simple</h1>
          <p className="text-xl mb-8">
            Reduce energy waste and lower costs with AI-powered virtual energy audits
          </p>
          <div className="space-x-4">
            <a href="/signup" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Started
            </a>
            <a href="/about" className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EcoWatt?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              <p>Machine learning algorithms analyze your energy patterns and provide actionable insights</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p>Track energy consumption across multiple buildings with smart meter integration</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
              <p>Average 25% reduction in energy costs for our users through optimized consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">"EcoWatt helped us reduce our energy bills by 30% within the first month!"</p>
              <p className="font-semibold">- Office Complex Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">"The virtual audit system identified savings opportunities we never considered."</p>
              <p className="font-semibold">- School District Administrator</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 EcoWatt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
