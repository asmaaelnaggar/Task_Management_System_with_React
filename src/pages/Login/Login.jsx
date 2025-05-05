import React, { useContext, useState } from 'react';
import Input_Password from '../../Components/Input/Input_Password';
import Input_Email from '../../Components/Input/Input_Email';
import ToggleButton from '../../Components/ToggleThemeButton/ToggleButton';
import { motion } from 'framer-motion';
import { ThemeContext } from './../../Context/ThemeContext';
import { useNavigate } from 'react-router';


const Login = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        setError('');
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(
            (user) =>
                user.email === email.trim() &&
                user.password === password
        );

        if (foundUser) {
            // Store current user in localStorage
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            alert("Login successful!");
            navigate("/layout/dashboard");
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className={theme === 'light' ? 'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]' :
            'flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500'}>
            <ToggleButton />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}>
                <div className={theme === 'light' ? 'relative w-98 h-auto shadow-lg p-10 rounded-xl bg-white' :
                    'relative w-98 h-auto shadow-lg p-10 rounded-xl bg-black text-[#A6A5A5]'}>

                    <div className='gap-[10px]'>
                        <h2 className={theme === "light" ? "text-lg sm:text-xl md:text-2xl font-bold font-sans text-black" :
                            "text-lg sm:text-xl md:text-2xl font-bold font-sans text-[#A6A5A5]"}>Welcome Back 👋</h2>
                        <p className={theme === 'light' ? 'text-sm' : 'text-sm text-[#A6A5A5]'}>
                            Today is a new day. It's your day. You shape it.<br />
                            Sign in to start managing your projects.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 mt-10'>
                        <form onSubmit={handleLogin} className='flex flex-col justify-between gap-8'>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <Input_Email value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="Password">Password</label>
                                <Input_Password value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col justify-end items-end gap-1'>
                                    <a className={theme === 'light' ? 'text-[#212121] underline underline-offset-1' : 'text-white underline underline-offset-1'} href="Forget_password">forget password ?</a>
                                </div>
                                <button
                                    className='bg-[#122B39] text-white px-6 py-2 rounded-xl text-sm cursor-pointer hover:bg-sky-700'
                                    type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='flex items-center mt-2'>
                        <hr className='flex-grow border-t' />
                        <span className='max-3 text-sm'>Or</span>
                        <hr className='flex-grow border-t' />
                    </div>

                    <div className='flex flex-col gap-2 justify-center items-center mt-2 mb-5'>
                        <div className='flex justify-center items-center mt-5 mb-5 w-2xs'>
                            <button
                                className={theme === 'light'
                                    ? 'bg-[#A3E1EC] flex gap-1.5 items-center px-6 py-2 rounded-full text-sm border-2 border-[#A3E1EC] cursor-pointer hover:border-blue-500'
                                    : 'bg-[#E3F3FB] flex gap-1.5 items-center px-6 py-2 rounded-full text-sm border-2 text-black hover:border-blue-500'}
                                type="button">
                                <img src="/src/assets/icons/google.svg" alt="" />Sign In with Google
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-center items-center mt-5 mb-5'>
                        <p>Don't you have an account?
                            <a className={theme === 'light' ? 'text-[#212121] underline underline-offset-1' : 'text-white underline underline-offset-1'} href="/register"> signUp</a>
                        </p>
                    </div>

                    <div className='absolute bottom-2 opacity-50 mb-0 flex'>
                        <h6>© Interest-based ADS | Don’t steal my INFO</h6>
                    </div>
                </div>
            </motion.div>
        </div>
        
    );
};

export default Login;
