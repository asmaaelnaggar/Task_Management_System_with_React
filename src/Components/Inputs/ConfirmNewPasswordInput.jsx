import React from "react";
const ConfirmNewPasswordInput = ({ value, onChange }) => {
    return (
      <div className="mb-4 flex items-center gap-4 ">
        <label
          htmlFor="confirmNewPassword"
          className="w-40 text-sm font-medium text-gray-500"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          className="w-full  px-3 py-2 border border-gray-300 rounded-md text-gray-500 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    );
  };
  
  export default ConfirmNewPasswordInput;
  
  