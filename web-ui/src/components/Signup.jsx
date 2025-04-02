import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-green-400 text-center">Sign Up</h2>

        {/* Full Name */}
        <div className="mt-6">
          <label className="text-white block mb-2">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
          />

          <label className="text-white block mt-4 mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="text-white block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-white block mb-2">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label className="text-white block mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full mt-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Sign Up
        </button>

        <p
        onClick={() => navigate('/login')}
        className="text-center text-white mt-4 cursor-pointer hover:text-blue-400 transition">
          <span className='text-blue-400 cursor-pointer hover:text-blue-500 transition'>Already have an account?
          </span>
          Login
          
        </p>

        {/* Back to Welcome */}
        <p
          onClick={() => navigate("/")}
          className="text-center text-white mt-4 cursor-pointer hover:text-green-400 transition"
        >
          Back to Welcome
        </p>
      </div>
    </div>
  );
};

export default Signup;
