import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_BY_CATEGORY,
  SEARCH_PRODUCTS,
} from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null,
  filteredProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
      
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
      
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.error };
      
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.category === action.payload
        ),
      };
      
    case SEARCH_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
      
    default:
      return state;
  }
};

export default productReducer;

