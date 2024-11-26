import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";
import { useNavigate } from 'react-router-dom';

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Added for navigation
  const { filteredProducts, loading } = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Redirect to product detail page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product-card border p-4 rounded cursor-pointer"
          onClick={() => handleProductClick(product.id)} // Make card clickable
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover"
          />
          <h3 className="mt-2 font-bold text-sm md:text-base">{product.title}</h3>
          <p className="text-blue-500 text-sm md:text-base">${product.price}</p>
          <h5 className="flex items-center mt-2 text-yellow-500 text-xs md:text-sm">Rating-{product.rating}</h5>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering product click
              handleAddToCart(product);
            }}
            className="bg-blue-500 text-white px-2 py-1 mt-2 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-200 text-xs sm:text-sm"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
