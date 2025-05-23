import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadio = (e) => {
    setForm({ ...form, agency: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: form.name, email: form.email });
    navigate("/profile");
  };

  return (
    <div className="h-screen overflow-y-hidden flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your PopX account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Radio Buttons */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={form.agency === "Yes"}
                  onChange={handleRadio}
                  className="accent-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={form.agency === "No"}
                  onChange={handleRadio}
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp