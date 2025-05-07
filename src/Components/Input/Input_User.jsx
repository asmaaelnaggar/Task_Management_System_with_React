import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './../../Context/ThemeContext';

const Input_User = ({ 
    name, 
    value, 
    onChange, 
    placeholder, 
    type = 'text',
    required = true 
}) => {
    const { theme } = useContext(ThemeContext);

    const inputClass = `
        hover:border-blue-500 
        focus:outline-none 
        focus:ring-1 
        focus:border-blue-500 
        transition 
        duration-200 
        ease-in-out 
        border-[1px] 
        p-2 sm:p-3 
        rounded-md 
        w-full 
        h-[48px] 
        max-w-sm
        ${theme === 'light'
            ? 'border-slate-300 bg-[#F5F5F5] text-black'
            : 'border-slate-600 bg-slate-800 text-white'
        }
    `;

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={inputClass}
        />
    );
};

Input_User.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool
};

export default Input_User;