import React, { useContext } from 'react';
import { ThemeContext } from './../../Context/ThemeContext';

const Input_Email = ({ name, value, onChange, placeholder = "Enter your email" }) => {
    const { theme } = useContext(ThemeContext);

    const inputClass = `border-[1px] 
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
            type="email"
            id="Email"
            name={name}          
            value={value}      
            onChange={onChange}  
            placeholder={placeholder}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            className={inputClass}
        />
    );
}

export default Input_Email;