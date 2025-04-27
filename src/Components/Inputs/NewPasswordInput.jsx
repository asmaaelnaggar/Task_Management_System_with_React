import React from "react";
const NewPasswordInput = ({ value, onChange }) => {
    return (
      <div className="mb-4 flex items-center gap-4">
        <label
          htmlFor="newPassword"
          className="w-40 text-sm font-medium text-gray-700"
        >
          New Password:
        </label>
        <input
          type="password"
          id="newPassword"
          className="w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    );
  };
  
  export default NewPasswordInput;
  
  