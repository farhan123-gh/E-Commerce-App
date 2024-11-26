import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaPhone, FaShoppingCart } from 'react-icons/fa';
import SearchBar from './SearchBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <header className="bg-gray-300 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        {/* Logo and Contact */}
        <div className="flex items-center space-x-2">
          <FaPhone size={20} />
          <p className="text-sm text-gray-600">Call: +0123 456 789</p>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-1/2">
          <SearchBar />
        </div>

        {/* Right Side Icons and Selectors */}
        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
          <select className="p-2 border rounded-md text-sm">
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
          </select>
          <select className="p-2 border rounded-md text-sm">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <button
            onClick={toggleSignIn}
            className="p-2 text-blue-600 font-semibold text-sm"
          >
            Sign in
          </button>
          <Link to="/wishlist">
            <FaHeart size={20} />
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={20} />
          </Link>
        </div>
      </div>

      {/* Sign-In Form */}
      {showSignIn && <SignInForm toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} />}
      {showSignUp && <SignUpForm toggleSignUp={toggleSignUp} />}
    </header>
  );
};

export default Header;


