import React, { useContext, useState } from 'react';
import ToggleButton from '../../Components/ToggleThemeButton/ToggleButton';
import Input_Email from '../../Components/Input/Input_Email';
import Input_Password from '../../Components/Input/Input_Password';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

export default function ForgotPassword() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 1: send code
  const sendCode = () => {
    if (!email) {
      return alert('Please enter your email');
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (!users.find(u => u.email === email.trim())) {
      return alert('No account found with that email');
    }
    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('resetEmail', email.trim());
    localStorage.setItem('resetCode', generated);
    alert(`Your reset code is: ${generated}`); 
    setCode(generated);
    setStep(2);
  };

  // Step 2: verify code
  const verifyCode = () => {
    if (enteredCode !== code) {
      return alert('Code is incorrect, please try again');
    }
    setStep(3);
  };

  // Step 3: set new password
  const updatePassword = () => {
    if (!password || !confirmPassword) {
      return alert('Please fill in both password fields');
    }
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const resetEmail = localStorage.getItem('resetEmail');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 1) Update the users array
    const updatedUsers = users.map(u =>
      u.email === resetEmail
        ? { ...u, password }
        : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // 2) If this user is also the currentUser session, update that too:
    const currentUserRaw = localStorage.getItem('currentUser');
    if (currentUserRaw) {
      const currentUser = JSON.parse(currentUserRaw);
      if (currentUser.email === resetEmail) {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ ...currentUser, password })
        );
      }
    }

    // 3) Cleanup temporary reset values
    localStorage.removeItem('resetEmail');
    localStorage.removeItem('resetCode');

    alert('Password updated successfully!');
    navigate('/');
  };

  const containerCls = theme === 'light'
    ? 'flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]'
    : 'flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]';

  return (
    <div className={containerCls}>
      <ToggleButton />

      <div className="w-full max-w-sm p-8 bg-white dark:bg-black rounded-xl shadow-lg">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Reset Password</h2>
            <p className="mb-4">Enter your email to receive a reset code.</p>
            <Input_Email
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              onClick={sendCode}
              className="mt-4 w-full bg-[#122B39] text-white py-2 rounded"
            >
              Send Code
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Enter Code</h2>
            <p className="mb-4">
              We sent a code to <strong>{email}</strong>.
            </p>
            <input
              type="text"
              value={enteredCode}
              onChange={e => setEnteredCode(e.target.value)}
              placeholder="6-digit code"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={verifyCode}
              className="w-full bg-[#122B39] text-white py-2 rounded"
            >
              Verify Code
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4">Set New Password</h2>
            <Input_Password
              placeholder="New password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Input_Password
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={updatePassword}
              className="mt-4 w-full bg-[#122B39] text-white py-2 rounded"
            >
              Update Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}
