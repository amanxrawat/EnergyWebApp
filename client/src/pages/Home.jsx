import React from "react";
import { FaUsers, FaRegBuilding, FaUsersCog, FaLeaf, FaBolt, FaHandsHelping, FaClock, FaChartBar, FaCog } from "react-icons/fa";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import PageLoad1 from "../constants/PageLoad1";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <PageLoad1 />
      <div className="bg-gray-100 text-gray-900 z-[-1]">

        {/* Hero Section */}
        <Hero />

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
        {/* <section className="py-16 bg-white">
          <h3 className="text-center text-3xl font-bold">Manage Your Entire Community in a Single System</h3>
          <p className="text-center mt-3 text-gray-600">Who is EcoWatt suitable for?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-10">
            <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
              <FaUsers className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-xl font-bold mt-3">Societies and Domestic Households</h4>
              <h6 className="pt-1 text-center"> EcoWatt empowers residential societies with smart energy management solutions. Our platform helps track energy consumption, optimize usage, and implement sustainable practices to reduce costs and carbon footprints. By integrating renewable energy sources and promoting efficiency, we enable communities to embrace a greener lifestyle while lowering electricity bills.

              </h6>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
              <FaRegBuilding className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-xl font-bold mt-3">Industries anf Factories</h4>
              <h6 className=" pt-1" >EcoWatt provides industries and factories with advanced energy auditing and optimization solutions. Our platform helps businesses monitor large-scale energy consumption, detect inefficiencies, and implement cost-saving strategies. By integrating smart analytics and sustainable practices, industries can enhance productivity, reduce operational costs, and minimize their carbon footprint, contributing to a greener future.</h6>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg text-center shadow-md">
              <FaUsersCog className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-xl font-bold mt-3">Clubs and Groups</h4>
              <h1 className="pt-1">EcoWatt supports clubs and groups in adopting energy-efficient practices to reduce their environmental impact. Whether it's a recreational club, sports facility, or community organization, our platform provides insights into energy consumption, promotes sustainability, and helps optimize resource usage. By implementing smart energy solutions, clubs can lower costs and contribute to a cleaner, greener future.</h1>
            </div>

          </div>
        </section> */}

<section className="py-20 bg-white">
          <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Manage Your Entire Community in a Single System
          </h3>
          <p className="text-center mt-4 text-gray-600 text-lg">Who is EcoWatt suitable for?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 mt-12 max-w-7xl mx-auto">
            <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-100 transition-colors duration-300">
                <FaUsers className="text-green-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-2xl font-bold mt-6 text-gray-800">Societies and Domestic Households</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                EcoWatt empowers residential societies with smart energy management solutions. Our platform helps:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Track energy consumption
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Optimize daily usage
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Reduce carbon footprints
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                <FaRegBuilding className="text-blue-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-2xl font-bold mt-6 text-gray-800">Industries and Factories</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Advanced solutions for industrial needs including:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Large-scale monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Efficiency optimization
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Cost-saving strategies
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-100 transition-colors duration-300">
                <FaUsersCog className="text-purple-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-2xl font-bold mt-6 text-gray-800">Clubs and Groups</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Perfect for community organizations with:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    Usage insights
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    Resource optimization
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    Sustainable practices
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        {/* <section className="py-16 bg-gray-200">
          <h3 className="text-center text-4xl font-bold">Why Choose EcoWatt?</h3>
          <p className="text-center mt-3 text-gray-600">Unlock the power of energy efficiency with our solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-10">
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaLeaf className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Sustainability</h4>
              <p className="text-gray-600 mt-2">Helping you reduce your carbon footprint effectively.</p>
            </div>
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaBolt className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Efficiency</h4>
              <p className="text-gray-600 mt-2">Smart energy solutions tailored to your needs.</p>
            </div>
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaHandsHelping className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Community Support</h4>
              <p className="text-gray-600 mt-2">We collaborate with communities for a greener future.</p>
            </div>
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaClock className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Real-Time Energy Monitoring</h4>
              <p className="text-gray-600 mt-2">Track and optimize your energy usage in real-time for maximum efficiency.</p>
            </div>
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaChartBar className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Data-Driven Insights</h4>
              <p className="text-gray-600 mt-2">Gain valuable insights from energy consumption trends and analytics.</p>
            </div>
            <div className="p-6 bg-[#E8F3FC] rounded-lg text-center shadow-lg h-64 flex flex-col justify-center">
              <FaCog className="text-green-500 text-4xl mx-auto" />
              <h4 className="text-2xl font-bold mt-3">Smart Energy Solutions</h4>
              <p className="text-gray-600 mt-2">Automate and optimize energy use with innovative technology.</p>
            </div>
          </div>
        </section> */}

<section className="py-20 bg-gray-50">
          <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Why Choose EcoWatt?
          </h3>
          <p className="text-center mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Unlock the power of energy efficiency with our innovative solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 mt-12 max-w-7xl mx-auto">
            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-100 transition-colors duration-300">
                <FaLeaf className="text-green-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Sustainability</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Helping you reduce your carbon footprint with:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Eco-friendly practices
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Carbon tracking
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                    Green initiatives
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                <FaBolt className="text-blue-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Efficiency</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Smart solutions tailored to you:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Optimized usage
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Cost reduction
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-2">✓</span>
                    Smart automation
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-100 transition-colors duration-300">
                <FaHandsHelping className="text-purple-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Community Support</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Collaborative approach with:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    24/7 assistance
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    Expert guidance
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 p-1 rounded-full mr-2">✓</span>
                    Community events
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-teal-100 transition-colors duration-300">
                <FaClock className="text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Real-Time Monitoring</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Instant tracking features:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-teal-100 p-1 rounded-full mr-2">✓</span>
                    Live monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="bg-teal-100 p-1 rounded-full mr-2">✓</span>
                    Instant alerts
                  </li>
                  <li className="flex items-center">
                    <span className="bg-teal-100 p-1 rounded-full mr-2">✓</span>
                    Usage patterns
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                <FaChartBar className="text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Data Insights</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Advanced analytics with:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-amber-100 p-1 rounded-full mr-2">✓</span>
                    Trend analysis
                  </li>
                  <li className="flex items-center">
                    <span className="bg-amber-100 p-1 rounded-full mr-2">✓</span>
                    Predictive insights
                  </li>
                  <li className="flex items-center">
                    <span className="bg-amber-100 p-1 rounded-full mr-2">✓</span>
                    Custom reports
                  </li>
                </ul>
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-rose-100 transition-colors duration-300">
                <FaCog className="text-rose-500 text-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mt-6 text-gray-800">Smart Solutions</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Innovative technology with:
                <ul className="mt-4 space-y-2 text-left list-none">
                  <li className="flex items-center">
                    <span className="bg-rose-100 p-1 rounded-full mr-2">✓</span>
                    AI integration
                  </li>
                  <li className="flex items-center">
                    <span className="bg-rose-100 p-1 rounded-full mr-2">✓</span>
                    Smart controls
                  </li>
                  <li className="flex items-center">
                    <span className="bg-rose-100 p-1 rounded-full mr-2">✓</span>
                    IoT devices
                  </li>
                </ul>
              </p>
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
      <Footer />
    </>
  );
};

export default Home;
