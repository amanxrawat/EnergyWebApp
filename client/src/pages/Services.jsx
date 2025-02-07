// import React from "react";
// import { FaSolarPanel, FaRecycle, FaLightbulb, FaWind, FaWater, FaPlug } from "react-icons/fa";
// import Footer from "../components/Footer";  
// import Navbar from "../components/Navbar";

// const Services = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="bg-gray-100 text-gray-900 min-h-screen">
      
//       {/* Services Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
//         <h2 className="text-4xl font-bold">Our Services</h2>
//         <p className="mt-3">Providing sustainable energy solutions for a better tomorrow.</p>
//       </header>
      
//       {/* Services Section */}
//       <section className="py-16 bg-white px-10">
//         <h3 className="text-center text-3xl font-bold">What We Offer</h3>
//         <p className="text-center mt-3 text-gray-600">Explore our range of eco-friendly and energy-efficient services.</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaSolarPanel className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Solar Energy Consulting</h4>
//             <p className="text-gray-600 mt-2">Helping you harness solar power for sustainable energy solutions.</p>
//           </div>
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaRecycle className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Waste-to-Energy Solutions</h4>
//             <p className="text-gray-600 mt-2">Transforming waste into clean, renewable energy sources.</p>
//           </div>
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaLightbulb className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Energy Efficiency Audits</h4>
//             <p className="text-gray-600 mt-2">Analyzing and optimizing your energy usage for maximum efficiency.</p>
//           </div>
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaWind className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Wind Energy Solutions</h4>
//             <p className="text-gray-600 mt-2">Guidance on implementing wind energy for your business or home.</p>
//           </div>
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaWater className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Water Conservation Systems</h4>
//             <p className="text-gray-600 mt-2">Smart solutions for sustainable water management and conservation.</p>
//           </div>
//           <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
//             <FaPlug className="text-green-500 text-4xl mx-auto" />
//             <h4 className="text-xl font-bold mt-3">Smart Grid Integration</h4>
//             <p className="text-gray-600 mt-2">Connecting homes and businesses to modern, efficient power grids.</p>
//           </div>
//         </div>
//       </section>
      
//       {/* Call to Action */}
//       <section className="py-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
//         <h3 className="text-3xl font-bold">Ready to Go Green?</h3>
//         <p className="mt-3">Join us in creating a cleaner and more energy-efficient world.</p>
//         <button className="mt-5 px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow-lg hover:bg-gray-200">Get Started</button>
//       </section>
//     </div>
//     <Footer/>   
//     </>
//   );
// };

// export default Services;



import React from "react";
import { FaSolarPanel, FaRecycle, FaLightbulb, FaWind, FaWater, FaPlug } from "react-icons/fa";
import Footer from "../components/Footer";  
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100">
        {/* Background gradient effect */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          
          {/* Services Hero Section */}
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="mt-6 text-lg font-medium text-gray-600">
              Providing sustainable energy solutions for a better tomorrow.
            </p>
          </div>
          
          {/* Services Section */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-10">
              What We Offer
            </h3>
            <p className="text-center text-lg font-medium text-gray-600 mb-12">
              Explore our range of eco-friendly and energy-efficient services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-100 transition-colors duration-300">
                  <FaSolarPanel className="text-green-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Solar Energy Consulting</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Helping you harness solar power for sustainable energy solutions.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                  <FaRecycle className="text-blue-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Waste-to-Energy Solutions</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Transforming waste into clean, renewable energy sources.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-100 transition-colors duration-300">
                  <FaLightbulb className="text-purple-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Energy Efficiency Audits</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Analyzing and optimizing your energy usage for maximum efficiency.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-teal-100 transition-colors duration-300">
                  <FaWind className="text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Wind Energy Solutions</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Guidance on implementing wind energy for your business or home.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <FaWater className="text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Water Conservation Systems</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Smart solutions for sustainable water management and conservation.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-100 transition-colors duration-300">
                  <FaPlug className="text-rose-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mt-6 text-gray-800">Smart Grid Integration</h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Connecting homes and businesses to modern, efficient power grids.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 text-center mb-20">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl px-6 py-12 max-w-4xl mx-auto shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Go Green?</h3>
              <p className="text-white/90 mb-8 text-lg">
                Join us in creating a cleaner and more energy-efficient world.
              </p>
              <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-md shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </section>

          {/* Bottom gradient effect */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <Footer/>   
    </>
  );
};

export default Services;
