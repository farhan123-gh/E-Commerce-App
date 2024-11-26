import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  // Handle Search Input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Search Button Click
  const handleSearchButtonClick = () => {
    const matchedProduct = products.find((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchedProduct) {
      navigate(`/product/${matchedProduct.id}`);
    } else {
      alert('No matching product found!');
    }
  };

  return (
    <div className="flex items-center space-x-2 w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="px-4 py-2 border rounded w-full sm:w-64 md:w-80 lg:w-96"
      />
      <button
        onClick={handleSearchButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
