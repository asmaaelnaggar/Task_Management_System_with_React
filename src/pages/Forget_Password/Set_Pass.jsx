import React, { useContext, useEffect, useState } from 'react'
import ToggleButton from '../../Components/ToggleThemeButton/ToggleButton';
import Input_Password from '../../Components/Input/Input_Password';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ThemeContext } from './../../Contexts/ThemeContext';

const Set_Pass = () => {
    const { theme } = useContext(ThemeContext);
    const navegate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    // };
    const handelSubmit = (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            alert("Please fill in all fields");
            return null;
        } else if (password !== confirmPassword) {
            alert("Passwords do not match");
            setPassword('');
            setConfirmPassword('');
        } else {
            alert("Password updated successfully");
            navegate('/Success');
        }
    };
    return (
        <>
            <div className={theme === 'light' ? 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5] '
                : 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500'}>

                <ToggleButton />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>

                    <div className={theme === 'light' ? 'relative  w-98 h-auto shadow-lg p-10 rounded-xl  bg-white' : 'relative w-98 h-auto shadow-lg p-10 rounded-xl bg-black text-[#A6A5A5]'}>
                        {theme === 'light' ? <a href='/Forget_Password'>
                            <svg className='relative top-0 left-1' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#162D3A" />
                                <path d="M17 20.6611L25.6987 11.0003" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M17 21L25.6987 30.6609" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </a> : <a href='/Forget_Password'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="21" fill="#A6A5A5" />
                                <path d="M17 20.6611L25.6987 11.0003" stroke="black" stroke-width="2" stroke-linecap="round" />
                                <path d="M17 21L25.6987 30.6609" stroke="black" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </a>}

                        <div className='gap-[10px] mt-8'>
                            <h2 className='text-xl font-bold font-sans font-#Forget Password'>Set a new password</h2>
                            <p className='opacity-45'>Create a new password. Ensure it differs from
                                previous ones for security</p>
                        </div>
                        {/* start of the data inter */}
                        <div className='flex flex-col gap-4 mt-10'>
                            <form action="/submit" className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="password" >password</label>
                                    <Input_Password id="password"
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        required={true}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password">Confirm Password</label>
                                    <Input_Password id="confirm-password"
                                        type="password"
                                        placeholder="Confirm Password"
                                        label="Confirm Password"
                                        required={true}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {/* send to the regestration */}
                                    < div className='flex gap-4 justify-center items-center mt-5 mb-5' >
                                        <button onClick={handelSubmit} className='bg-[#122B39] text-white px-6 py-2 rounded-md text-sm cursor-pointer hover:bg-sky-700' type="Submit">Update Pasword</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* end of the data inter */}
                    </div >
                </motion.div >
            </div >
        </>
    )
}

export default Set_Pass