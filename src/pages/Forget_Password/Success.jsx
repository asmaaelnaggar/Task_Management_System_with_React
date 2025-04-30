import React, { useContext } from 'react'
import ToggleButton from '../../Components/ToggleThemeButton/ToggleButton';
import { motion } from 'framer-motion';
import { ThemeContext } from './../../Context/ThemeContext';
import { useNavigate } from 'react-router';

const Success = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/login');
    };
    return (
        <>
            <div className={theme === 'light' ? 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5] '
                : 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500'}>
                <ToggleButton />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}>
                    <div className={theme === 'light' ? 'relative  w-98 h-auto shadow-lg p-10 rounded-xl  bg-white' : 'relative w-98 h-auto shadow-lg p-10 rounded-xl bg-black text-[#A6A5A5]'}>
                        {theme === 'light' ?
                            <div className='flex items-center gap-4 ml-28 mt-20'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="49" fill="#162D3A" stroke="#162D3A" stroke-width="2" />
                                    <path d="M40 51.3535L47.0711 58.4246" stroke="#E1E1E1" stroke-width="3" stroke-linecap="round" />
                                    <path d="M47.6465 58L64.6465 41" stroke="white" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>
                            : <div className='flex items-center gap-4 ml-28 mt-20'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="49" fill="#162D3A" stroke="#D1D5DB" stroke-width="2" />
                                    <path d="M40 51.3535L47.0711 58.4246" stroke="black" stroke-width="3" stroke-linecap="round" />
                                    <path d="M47.6465 58L64.6465 41" stroke="black" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>
                        }

                        <div className='flex flex-col justify-center items-center gap-[10px] mt-8'>
                            <h2 className='text-xl font-bold font-sans font-#Forget Password'>Successful</h2>
                            <p className='opacity-45'>Congratulations! Your password has been successfully updated. Click Continue to login</p>
                        </div>
                        <div className='flex flex-col gap-4 mt-10'>
                            <button onClick={handleContinue} className='bg-[#122B39] text-white px-6 py-2 rounded-md text-sm cursor-pointer hover:bg-sky-700' type="submit">Continue</button>
                        </div>
                    </div>
                </motion.div >
            </div >
        </>
    )
}

export default Success