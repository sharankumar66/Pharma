import React from 'react';

const ModernInput = ({ label, type = 'text', ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 text-sm font-semibold">
        Your Label
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter text..."
          className="w-full px-4 py-2 rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-indigo-300 text-gray-900 placeholder-gray-500 transition-shadow duration-200 ease-in-out shadow-md focus:shadow-lg"
        />
      </div>
    </div>
  );
};

const Input = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Form with Modern Input</h2>
      <ModernInput label="Your Name" />
      <ModernInput label="Email Address" type="email" className="mt-4" />
      <ModernInput label="Password" type="password" className="mt-4" />
    </div>
  );
};

export default Input;
