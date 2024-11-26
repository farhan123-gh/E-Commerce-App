import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

const API_URL = 'https://dummyjson.com/products';

// Products fetch karne ka action
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message });
  }
};

// Category ke basis par filter karne ka action
export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});

// Search bar ke through products search karne ka action
export const searchProducts = (searchTerm) => ({
  type: SEARCH_PRODUCTS,
  payload: searchTerm,
});




export const fetchProductsByCategory = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        category
          ? `https://dummyjson.com/products/category/${category}`
          : 'https://dummyjson.com/products'
      );
      const data = await response.json();
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data.products });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
    }
  };
};
