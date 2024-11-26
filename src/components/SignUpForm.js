import React, { useState } from 'react';

const SignUpForm = ({ toggleSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate Form
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format validation
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.trim().length >= 6; // Minimum 6 characters
    const isNameValid = name.trim().length > 0; // Name should not be empty
    setIsFormValid(isEmailValid && isPasswordValid && isNameValid);
  };

  // Handle Form Submit
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Sign Up Successful:', { name, email, password });
      setName('');
      setEmail('');
      setPassword('');
      toggleSignUp();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-96">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateForm();
            }}
            className="w-full p-2 mb-4 border rounded-md"
          />
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
          onClick={toggleSignUp}
          className="w-full p-2 rounded-md bg-gray-200 text-gray-500 mt-2 transition duration-300 hover:bg-gray-300 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
