import React, { useState } from "react";

export default function Profile({ user }) {
  const [photo, setPhoto] = useState("https://randomuser.me/api/portraits/women/44.jpg");

  const handlePhotoChange = (e) => {  
    const file = e.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h2>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src={photo}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
            <label htmlFor="photo-upload">
              <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m0 0a2.5 2.5 0 11-3.536-3.536m3.536 3.536L9 21H4v-5l11.232-11.232z"
                  />
                </svg>
              </div>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed border-t pt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}