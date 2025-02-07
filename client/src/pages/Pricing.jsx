import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
    <Navbar/>   
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center py-20">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-green-600">Choose Your Plan</h2>
      <p className="text-center text-gray-600 mt-3">Find the best plan that suits your needs.</p>
      
      {/* Pricing Plans */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-500">Freemium</h3>
          <p className="mt-2 text-gray-600">Basic features for individual users</p>
          <p className="mt-4 text-3xl font-bold">$0 <span className="text-lg text-gray-500">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Energy tracking</li>
            <li>✔ Basic reports</li>
            <li>✖ Advanced analytics</li>
            <li>✖ Priority support</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">Get Started</button>
        </div>

        {/* Subscription Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-green-500">
          <h3 className="text-2xl font-bold text-green-500">Subscription</h3>
          <p className="mt-2 text-gray-600">Advanced features for businesses</p>
          <p className="mt-4 text-3xl font-bold">$29 <span className="text-lg text-gray-500">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Energy tracking</li>
            <li>✔ Detailed reports</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">Subscribe Now</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Pricing;
