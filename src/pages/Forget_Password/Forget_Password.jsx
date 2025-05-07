import React, { useContext } from 'react'
import Input_Email from '../../Components/Input/Input_Email';
import ToggleButton from '../../Components/ToggleThemeButton/ToggleButton';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ThemeContext } from './../../Context/ThemeContext';

const Forget_Password = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/set_Pass')
    };
    return (
        <>
            <div className={theme === 'light' ? 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5] '
                : 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500'}>
                <figure className='fixed top-0 right-0'><img src="/src/assets/icons/flowers_Top.svg" alt="" /></figure>
                <figure className='fixed left-0 bottom-0'><img src="/src/assets/icons/flowers_Bottom.svg" alt="" /></figure>
                <ToggleButton />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className={theme === 'light' ? 'relative  w-98 h-auto shadow-lg p-10 rounded-xl  bg-white' : 'relative  w-98 h-auto shadow-lg p-10 rounded-xl bg-black text-[#A6A5A5]'}>

                        {/* welcoming */}
                        <div className='gap-[10px]'>
                            <h2 className='text-xl font-bold font-sans font-#Forget Password'>Forget Password</h2>
                            <p className='opacity-45'>Enter your registered email below</p>
                        </div>
                        {/* start of the data inter */}
                        <div className='flex flex-col gap-4 mt-10'>
                            <form onSubmit={handleSubmit} action="/submit" className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="Email">Email Address</label>
                                    <Input_Email />
                                    {/* send to the regestration */}
                                    <div className='flex gap-4 justify-center items-center mt-5 mb-5'>
                                        <p>Remember the password?<a className={theme === 'light' ? 'text-[#212121] underline underline-offset-1' : 'text-white underline underline-offset-1'} href="/">Log in</a></p>
                                    </div>
                                </div>
                                <button className='bg-[#122B39] text-white px-6 py-2 rounded-md text-sm cursor-pointer hover:bg-sky-700' type="submit">Submit</button>
                            </form>
                        </div>
                        {/* end of the data inter */}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Forget_Password