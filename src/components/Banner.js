import React from 'react';

const Banner = () => {
  return (
    <div className="banner bg-gray-100 py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-16 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
        Welcome to Farhan Store
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
        Explore our exclusive range of products with amazing discounts!
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-orange-500">
        Shop Now
      </h1>
    </div>
  );
};

export default Banner;
