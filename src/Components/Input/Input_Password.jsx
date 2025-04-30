// Input_Password.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './../../Context/ThemeContext';

const Input_Password = ({ value, onChange, name }) => {
    const { theme } = useContext(ThemeContext);

    const inputClass = `
    border-[1px] 
    p-2 sm:p-3 
    rounded-md 
    w-full 
    h-[48px] 
    max-w-sm
    ${theme === 'light'
            ? 'border-slate-300 bg-[#F5F5F5] text-black'
            : 'border-slate-600 bg-slate-800 text-white'}
    hover:border-blue-500 
    focus:outline-none 
    focus:ring-1 
    focus:border-blue-500 
    transition duration-200 ease-in-out`;

    return (
        <input
            type="password"
            name={name}
            value={value}
            onChange={onChange}
            className={inputClass}
            placeholder="Enter your password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
        />
    );
};

export default Input_Password;
