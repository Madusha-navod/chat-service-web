import React from 'react'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className="text-center bg-gray-800 p-8 rounded-2xl shadow-lg">

      {/* About */}
      <div className="absolute right-8 top-20 max-w-sm text-white text-lg font-timenew roman">
        <h2 className="text-3xl font-medium text-blue-400 mt-2">Our Service</h2>
        <p className="border-l-4 border-blue-400 pl-4">Hello</p>
      </div>
      
      <h1 className="text-4xl font-semibold text-white">Welcome to</h1>
      <h2 className="text-3xl font-medium text-blue-400 mt-2">Chat Service</h2>
      <div className="mt-6 items-center justify-center flex space-x-4">
        <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition"
        onClick={() => navigate('/login')}>
          Login 
        </button>
        <span className="text-white mx-3 font-bold">OR</span>
        <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition"
        onClick={() => navigate('/signup')}>
           Sign Up
        </button>

        </div>
    </div>
  </div>
  )
}

export default Welcome

