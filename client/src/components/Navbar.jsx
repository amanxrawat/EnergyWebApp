import React from 'react';
// import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-green-600">EcoWatt</h1>
            <ul className="hidden md:flex space-x-10 font-bold">
                <li><a href="/" className="hover:text-green-500">Home</a></li>
                <li><a href="#" className="hover:text-green-500">Features</a></li>
                <li><a href="#" className="hover:text-green-500">Community</a></li>
                <li><a href="/about" className="hover:text-green-500">About</a></li>
                <li><a href="/pricing" className="hover:text-green-500">Pricing</a></li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register Now</button>
        </nav>
    );
};

export default Navbar;