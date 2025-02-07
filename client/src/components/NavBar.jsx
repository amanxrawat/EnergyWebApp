// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-green-600">
//           EcoWatt
//         </Link>
//         <div>
//           <Link to="/" className="text-gray-700 hover:text-green-600 px-3">
//             Home
//           </Link>
//           <Link to="/about" className="text-gray-700 hover:text-green-600 px-3">
//             About
//           </Link>
//           <Link to="/features" className="text-gray-700 hover:text-green-600 px-3">
//             Features
//           </Link>
//           <Link to="/login" className="text-gray-700 hover:text-green-600 px-3">
//             Login
//           </Link>
//           <Link to="/signup" className="text-gray-700 hover:text-green-600 px-3">
//             Register
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          EcoWatt
        </Link>
        
        <div className="flex items-center space-x-6">
          {currentUser ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600">
                Dashboard
              </Link>
              <Link to="/energy-input" className="text-gray-700 hover:text-green-600">
                Energy Input
              </Link>
              <Link to="/recommendations" className="text-gray-700 hover:text-green-600">
                Recommendations
              </Link>
              <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-green-600">
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
