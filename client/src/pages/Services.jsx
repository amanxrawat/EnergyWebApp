import React from "react";
import { FaSolarPanel, FaRecycle, FaLightbulb, FaWind, FaWater, FaPlug } from "react-icons/fa";
// import Footer from "../components/Footer";  
// import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      
      {/* Services Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-3">Providing sustainable energy solutions for a better tomorrow.</p>
      </header>
      
      {/* Services Section */}
      <section className="py-16 bg-white px-10">
        <h3 className="text-center text-3xl font-bold">What We Offer</h3>
        <p className="text-center mt-3 text-gray-600">Explore our range of eco-friendly and energy-efficient services.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaSolarPanel className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Solar Energy Consulting</h4>
            <p className="text-gray-600 mt-2">Helping you harness solar power for sustainable energy solutions.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaRecycle className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Waste-to-Energy Solutions</h4>
            <p className="text-gray-600 mt-2">Transforming waste into clean, renewable energy sources.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaLightbulb className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Energy Efficiency Audits</h4>
            <p className="text-gray-600 mt-2">Analyzing and optimizing your energy usage for maximum efficiency.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaWind className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Wind Energy Solutions</h4>
            <p className="text-gray-600 mt-2">Guidance on implementing wind energy for your business or home.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaWater className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Water Conservation Systems</h4>
            <p className="text-gray-600 mt-2">Smart solutions for sustainable water management and conservation.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaPlug className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Smart Grid Integration</h4>
            <p className="text-gray-600 mt-2">Connecting homes and businesses to modern, efficient power grids.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h3 className="text-3xl font-bold">Ready to Go Green?</h3>
        <p className="mt-3">Join us in creating a cleaner and more energy-efficient world.</p>
        <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow-lg hover:bg-gray-200">Get Started</button>
      </section>
    </div>
    {/* <Footer/>    */}
    </>
  );
};

export default Services;
