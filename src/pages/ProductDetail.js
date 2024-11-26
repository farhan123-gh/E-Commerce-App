import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { addToWishlist } from '../redux/actions/wishlistActions';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (!isAlreadyInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-64 h-64 object-cover"
        />
        <div className="md:ml-8 flex flex-col justify-end h-full">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-blue-500 my-2">${product.price}</p>
          <p className="text-gray-700 my-4">{product.description}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToWishlist(product);
              }}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-300 hover:bg-gray-400"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
