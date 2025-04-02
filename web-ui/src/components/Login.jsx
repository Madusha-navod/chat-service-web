import React from 'react'
import {useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
      <h2 className="text-3xl font-semibold text-blue-400 text-center">Login</h2>

      {/* Input Fields */}
      <div className="mt-6">
        <label className="text-white block mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="text-white block mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Login Button */}
      <button className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" 
      onClick={() => navigate('/chatapp')}>
        Login
      </button>

      <p className="text-center text-white mt-4 cursor-pointer hover:text-blue-400 transition"
      onClick={() => navigate('/signup')}>
       <span className='text-blue-400 cursor-pointer hover:text-blue-500 transition'> Don't have an account? 
       </span>Sign Up
      </p>

      {/* Go Back */}
      <p className="text-center text-white mt-4 cursor-pointer hover:text-blue-400 transition" 
        onClick={() => navigate('/')}>
        Back to Welcome
      </p>
    </div>
  </div>
);
};


export default Login;
