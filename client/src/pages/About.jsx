import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h2 className="text-4xl font-bold">About <span className="text-green-900">EcoWatt</span></h2>
        <p className="mt-3">Empowering a sustainable future through innovative energy solutions.</p>
      </header>
      
      <section className="py-16 bg-white px-6 md:px-16">
        <h3 className="text-center text-3xl font-bold">Our Mission</h3>
        <p className="text-center mt-3 text-gray-600 max-w-3xl mx-auto">
          At EcoWatt, we are committed to revolutionizing the way energy is managed and consumed.
          Our mission is to provide cutting-edge solutions that promote sustainability, reduce carbon footprints,
          and empower individuals and businesses to take control of their energy usage.
        </p>
      </section>
      
      <section className="py-10 bg-gray-100 px-6 md:px-16">
        <h3 className="text-center text-3xl font-bold">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {[
            { name: "Suraj Bhatt", role: "CEO & Founder" },
            { name: "Aman Rawat", role: "Chief Technology Officer" },
            { name: "Dhruv Sharma", role: "Head of Sustainability" }
          ].map((member, index) => (
            <div 
              key={index} 
              className="bg-white text-black p-5 rounded-lg shadow-md text-center"
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-10 bg-white px-6 md:px-16">
        <h3 className="text-center text-3xl font-bold">Our Values</h3>
        <ul className="list-disc list-inside space-y-2 text-lg max-w-3xl mx-auto text-gray-600 ">
          <li><strong className="text-green-600">Sustainability:</strong> We prioritize eco-friendly practices in everything we do.</li>
          <li><strong className="text-green-600">Innovation:</strong> We constantly seek new ways to improve energy management.</li>
          <li><strong className="text-green-600">Transparency:</strong> We believe in open communication and honesty with our clients.</li>
          <li><strong className="text-green-600">Community:</strong> We are dedicated to making a positive impact on the communities we serve.</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
