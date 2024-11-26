import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-8 space-y-6 sm:space-y-0">
          {/* Logo and Description */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-orange-500 text-2xl sm:text-3xl font-bold mb-2">Farhan Store</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
            </p>
            <p className="mt-4 text-orange-500 text-sm sm:text-base">Got Question? Call us 24/7</p>
            <p className="text-blue-500 font-semibold text-sm sm:text-base">+0123 456 789</p>
          </div>

          {/* Useful Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-gray-800 font-semibold mb-3 text-sm sm:text-base">Useful Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Our Services</Link></li>
              <li><Link to="#">How to shop on Farhan Store</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-gray-800 font-semibold mb-3 text-sm sm:text-base">Customer Service</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="#">Payment Methods</Link></li>
              <li><Link to="#">Money-back guarantee!</Link></li>
              <li><Link to="#">Returns</Link></li>
              <li><Link to="#">Shipping</Link></li>
              <li><Link to="#">Terms and Conditions</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-3 text-sm sm:text-base">My Account</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/SignInForm">Sign In</Link></li>
              <li><Link to="/Cart">View Cart</Link></li>
              <li><Link to="/Wishlist">My Wishlist</Link></li>
              <li><Link to="#">Track My Order</Link></li>
              <li><Link to="#">Help</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t pt-6 text-gray-500 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Farhan Store. All Rights Reserved.</p>
          <p>Company Name | Social Links</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
