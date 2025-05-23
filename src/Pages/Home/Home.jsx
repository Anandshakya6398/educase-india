import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="space-y-3">
          <button
            className="w-full cursor-pointer bg-purple-600 text-white py-3 rounded-lg font-medium"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="w-full cursor-pointer bg-purple-200 text-purple-800 font-semibold py-3 rounded-lg"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home