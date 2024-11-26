import React, { useState } from 'react';

const SignInForm = ({ toggleSignIn, toggleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate Form
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format validation
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.trim().length >= 6; // Minimum 6 characters
    setIsFormValid(isEmailValid && isPasswordValid);
  };

  // Handle Form Submit
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Sign In Successful:', { email, password });
      setEmail('');
      setPassword('');
      toggleSignIn();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-96">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <form onSubmit={handleSignInSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateForm();
            }}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateForm();
            }}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-2 rounded-md ${
              isFormValid
                ? 'bg-blue-500 text-white transition duration-300 hover:bg-blue-700 hover:text-gray-200'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
        <button
          onClick={toggleSignIn}
          className="w-full p-2 rounded-md bg-gray-200 text-gray-500 mt-2 transition duration-300 hover:bg-gray-300 hover:text-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            toggleSignIn();
            toggleSignUp();
          }}
          className="w-full text-blue-600 mt-4 underline"
        >
          New Customer? Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
