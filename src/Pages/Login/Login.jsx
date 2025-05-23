import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy name for demo, real app mein fetch karo
    setUser({ name: "User", email: form.email });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6 pt-28">
      <div className="w-full max-w-sm text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;