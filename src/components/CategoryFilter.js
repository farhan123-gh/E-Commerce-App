import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/actions/productActions';
import { fetchProductsByCategory } from '../redux/actions/productActions';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleAllProductsClick = () => {
    dispatch(fetchProductsByCategory('')); // Empty string will fetch all products
  };

  return (
    <div className="category-filter flex flex-wrap gap-4 justify-center my-4">
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-sm sm:text-base lg:text-lg"
        onClick={handleAllProductsClick}
      >
        All Products
      </button>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-sm sm:text-base lg:text-lg"
        onClick={() => handleCategoryClick('beauty')}
      >
        Beauty
      </button>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-sm sm:text-base lg:text-lg"
        onClick={() => handleCategoryClick('groceries')}
      >
        Groceries
      </button>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-sm sm:text-base lg:text-lg"
        onClick={() => handleCategoryClick('fragrances')}
      >
        Fragrances
      </button>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-sm sm:text-base lg:text-lg"
        onClick={() => handleCategoryClick('furniture')}
      >
        Furniture
      </button>
    </div>
  );
};

export default CategoryFilter;
