import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Banner from '../components/Banner';
import ProductDisplay from '../components/ProductDisplay';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home-page">
      {/* Banner Section */}
      <Banner />

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <CategoryFilter />
      </div>

      {/* Product Display Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Featured Products
        </h2>
        
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <ProductDisplay
            products={filteredProducts.length ? filteredProducts : products}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
