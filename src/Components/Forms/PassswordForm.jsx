import React, { useContext, useState } from 'react';
import CurrentPasswordInput from '../Inputs/CurrentPasswordInput';
import NewPasswordInput from '../Inputs/NewPasswordInput';
import ConfirmNewPasswordInput from '../Inputs/ConfirmNewPasswordInput';
import { ThemeContext } from '../../Context/ThemeContext';

const PasswordUpdateForm = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch current user's data from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Get the users array from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (currentPassword !== currentUser?.password) {
      alert("Current password is incorrect. Please try again.");
      clearFields();
      return;
    }

    if (newPassword === currentPassword) {
      alert("Sorry, your new password is the same as your current password. Try another password.");
      clearFields();
    } else if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match!');
      clearFields();
    } else {
      if (window.confirm("Are you sure you want to update your password?")) {
        // Update the password in the current user and users array in localStorage
        currentUser.password = newPassword;
        
        // Find and update the password in the users array
        const updatedUsers = users.map(user => 
          user.email === currentUser.email ? { ...user, password: newPassword } : user
        );

        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Update the current user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        alert("Password updated successfully!");
        clearFields();
      }
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel updating your password?")) {
      alert("Password update has been cancelled!");
      clearFields();
    }
  };

  const clearFields = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setErrorMessage('');
  };

  return (
    <div className={theme === "light" ? "flex flex-col justify-between p-6 bg-[#F3F4F8] pb-[102px]" : "flex flex-col justify-between p-6 bg-[#1E1F25] pb-[102px]"}>
      <div>
        <h2 className="text-[30px] font-semibold mb-6 text-gray-500">Password</h2>
        <p className='text-[#6A7181] mb-8'>Please Enter Your Current Password to change Your Password.</p>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Display error if any */}
        <CurrentPasswordInput value={currentPassword} onChange={setCurrentPassword} />
        <NewPasswordInput value={newPassword} onChange={setNewPassword} />
        <ConfirmNewPasswordInput value={confirmNewPassword} onChange={setConfirmNewPassword} />
      </div>
      <div className="flex gap-[10px] flex-row mt-6">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-[8px] hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-[#246083] text-white rounded-[8px] hover:bg-[#246083]"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;