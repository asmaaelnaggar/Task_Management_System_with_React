import React, { useState } from 'react';
import CurrentPasswordInput from './CurrentPasswordInput';
import NewPasswordInput from './NewPasswordInput';
import ConfirmNewPasswordInput from './ConfirmNewPasswordInput';

const PasswordUpdateForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmNewPassword) {
      console.log('Password updated!');
    } else {
      alert('New password and confirm password do not match!');
    }
  };

  const handleCancel = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="flex flex-col justify-between p-6 bg-[#F3F4F8] dark">
      <div>
        <h2 className="text-xl font-semibold mb-6">Password</h2>
        <p className='text-[#6A7181] mb-8'>please enter your current password to change your password.</p>
        <CurrentPasswordInput value={currentPassword} onChange={setCurrentPassword} />
        <NewPasswordInput value={newPassword} onChange={setNewPassword} />
        <ConfirmNewPasswordInput value={confirmNewPassword} onChange={setConfirmNewPassword} />
      </div>
      <div className="flex gap-[10px] flex-row-reverse mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Password
        </button>
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;
