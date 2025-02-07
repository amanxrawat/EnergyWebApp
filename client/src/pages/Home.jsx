import React from "react";
import { FaUsers, FaRegBuilding, FaUsersCog, FaLeaf, FaBolt, FaHandsHelping } from "react-icons/fa";
import Footer from "../components/Footer";  
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 text-gray-900">
      
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h2 className="text-4xl font-bold">Empowering a Sustainable Future with <span className="text-green-900">EcoWatt</span></h2>
        <p className="mt-3">Discover innovative ways to optimize energy consumption and reduce waste.</p>
        <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow-lg hover:bg-gray-200">Register</button>
      </header>
      
      {/* Clients Section */}
      <section className="py-10 text-center">
        <h3 className="text-2xl font-semibold">Early Adopters</h3>
        <p className="mt-2 text-gray-600">Join our journey as we build a sustainable future together</p>
        <div className="flex justify-center space-x-10 mt-6">
          <span className="text-3xl">🔗</span>
          <span className="text-3xl">🔘</span>
          <span className="text-3xl">📷</span>
          <span className="text-3xl">💡</span>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <h3 className="text-center text-3xl font-bold">Manage Your Entire Community in a Single System</h3>
        <p className="text-center mt-3 text-gray-600">Who is EcoWatt suitable for?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-10">
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaUsers className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Membership Organizations</h4>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaRegBuilding className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">National Associations</h4>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaUsersCog className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Clubs and Groups</h4>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaUsersCog className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Societies and Domestic Households</h4>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaUsersCog className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Industries anf Factories</h4>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
            <FaUsersCog className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Community</h4>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-16 bg-gray-200">
        <h3 className="text-center text-3xl font-bold">Why Choose EcoWatt?</h3>
        <p className="text-center mt-3 text-gray-600">Unlock the power of energy efficiency with our solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-10">
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaLeaf className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Sustainability</h4>
            <p className="text-gray-600 mt-2">Helping you reduce your carbon footprint effectively.</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaBolt className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Efficiency</h4>
            <p className="text-gray-600 mt-2">Smart energy solutions tailored to your needs.</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaHandsHelping className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Community Support</h4>
            <p className="text-gray-600 mt-2">We collaborate with communities for a greener future.</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaHandsHelping className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Community Support</h4>
            <p className="text-gray-600 mt-2">We collaborate with communities for a greener future.</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaHandsHelping className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Community Support</h4>
            <p className="text-gray-600 mt-2">We collaborate with communities for a greener future.</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center shadow-md">
            <FaHandsHelping className="text-green-500 text-4xl mx-auto" />
            <h4 className="text-xl font-bold mt-3">Community Support</h4>
            <p className="text-gray-600 mt-2">We collaborate with communities for a greener future.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h3 className="text-3xl font-bold">Join the EcoWatt Movement</h3>
        <p className="mt-3">Start making smarter energy choices today.</p>
        <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow-lg hover:bg-gray-200">Get Started</button>
      </section>
    </div>
    <Footer/>   
    </>
  );
};

export default Home;
