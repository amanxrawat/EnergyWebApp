// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-100 text-gray-900 min-h-screen flex justify-center">
//         <div className="max-w-7xl w-full">
//           {/* Hero Section */}
//           <header className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
//             <h2 className="text-4xl font-bold">
//               About <span className="text-green-900">EcoWatt</span>
//             </h2>
//             <p className="mt-3">
//               Empowering a sustainable future through innovative energy solutions.
//             </p>
//           </header>

//           <section className="py-16 bg-white px-6 md:px-16">
//             <h3 className="text-center text-3xl font-bold">Our Mission</h3>
//             <p className="text-center mt-3 text-gray-600 max-w-3xl mx-auto">
//               At EcoWatt, we are committed to revolutionizing the way energy is managed and consumed.
//               Our mission is to provide cutting-edge solutions that promote sustainability, reduce carbon footprints,
//               and empower individuals and businesses to take control of their energy usage.
//             </p>
//           </section>

//           <section className="py-10 bg-gray-100 px-6 md:px-16">
//             <h3 className="text-center text-3xl font-bold">Our Team</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
//               {[
//                 { name: "Suraj Bhatt", role: "CEO & Founder" },
//                 { name: "Aman Rawat", role: "Chief Technology Officer" },
//                 { name: "Dhruv Sharma", role: "Head of Sustainability" },
//               ].map((member, index) => (
//                 <div key={index} className="bg-white text-black p-5 rounded-lg shadow-md text-center">
//                   <h4 className="text-xl font-bold">{member.name}</h4>
//                   <p className="text-gray-600">{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="py-10 bg-white px-6 md:px-16">
//             <h3 className="text-center text-3xl font-bold">Our Values</h3>
//             <ul className="list-disc list-inside space-y-2 text-lg max-w-3xl mx-auto text-gray-600">
//               <li>
//                 <strong className="text-green-600">Sustainability:</strong> We prioritize eco-friendly practices in everything we do.
//               </li>
//               <li>
//                 <strong className="text-green-600">Innovation:</strong> We constantly seek new ways to improve energy management.
//               </li>
//               <li>
//                 <strong className="text-green-600">Transparency:</strong> We believe in open communication and honesty with our clients.
//               </li>
//               <li>
//                 <strong className="text-green-600">Community:</strong> We are dedicated to making a positive impact on the communities we serve.
//               </li>
//             </ul>
//           </section>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default About;


import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-900 min-h-screen flex justify-center px-4">
        <div className="max-w-6xl w-full">
          {/* Hero Section */}
          <header className="text-center py-24 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold">
              About <span className="text-green-200">EcoWatt</span>
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Leading the charge towards a sustainable future, EcoWatt is redefining energy consumption with cutting-edge innovations that empower individuals and businesses alike.
            </p>
          </header>

          {/* Mission Section */}
          <section className="py-16 bg-white px-8 md:px-20 rounded-lg shadow-md mt-10">
            <h3 className="text-center text-4xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-center mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At EcoWatt, we aim to drive a cleaner, smarter energy ecosystem by integrating advanced technology with sustainable practices. Our goal is to enable people to optimize energy consumption, reduce environmental impact, and contribute to a greener planet.
            </p>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-100 px-8 md:px-20 mt-10 rounded-lg shadow-md">
            <h3 className="text-center text-4xl font-bold text-gray-800">Meet Our Team</h3>
            <p className="text-center text-lg text-gray-700 mt-2">A dedicated team committed to revolutionizing sustainable energy.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
              {[
                { name: "Suraj Bhatt", role: "CEO & Founder", bio: "A leader with a vision to make clean energy accessible to all." },
                { name: "Aman Rawat", role: "Chief Technology Officer", bio: "An innovator bringing smart solutions to energy management." },
                { name: "Dhruv Sharma", role: "Head of Sustainability", bio: "A passionate advocate for a greener tomorrow." }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-2xl font-bold text-gray-800">{member.name}</h4>
                  <p className="text-green-600 text-lg font-semibold">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 bg-white px-8 md:px-20 mt-10 rounded-lg shadow-md">
            <h3 className="text-center text-4xl font-bold text-gray-800">Our Core Values</h3>
            <p className="text-center text-lg text-gray-700 mt-2">Principles that define our commitment to a better world.</p>
            <ul className="mt-6 space-y-4 text-lg max-w-3xl mx-auto text-gray-700">
              <li><strong className="text-green-600">🌱 Sustainability:</strong> We integrate eco-consciousness into every aspect of our work.</li>
              <li><strong className="text-green-600">💡 Innovation:</strong> Pioneering new solutions for smarter energy usage.</li>
              <li><strong className="text-green-600">🤝 Transparency:</strong> Building trust through honest and open communication.</li>
              <li><strong className="text-green-600">🌍 Community:</strong> Collaborating with global initiatives to create meaningful impact.</li>
              <li><strong className="text-green-600">⚡ Efficiency:</strong> Driving change through energy-saving technologies that benefit all.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
