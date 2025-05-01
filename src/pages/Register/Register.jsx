import React, { useContext, useState } from "react";
import Input_Password from "../../Components/Input/Input_Password";
import Input_Email from "../../Components/Input/Input_Email";
import ToggleButton from "../../Components/ToggleThemeButton/ToggleButton";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router";

const Register = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            setError('User already exists');
        } else {
            const newUser = { email, password };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Account created successfully!");
            navigate("/login");
        }
    };

    return (
        <div className={theme === "light" ? "flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]" :
            "flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500"}>
            <ToggleButton />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-xs sm:max-w-sm">
                <div className={theme === "light" ? "relative flex flex-col w-full h-fit shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-white" :
                    "relative flex flex-col w-full h-fit shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-black text-[#A6A5A5]"}>
                    <div className="space-y-4">
                        <h2 className={theme === "light" ? "text-lg sm:text-xl md:text-2xl font-bold font-sans text-black" :
                            "text-lg sm:text-xl md:text-2xl font-bold font-sans text-[#A6A5A5]"}>Create Your Account.</h2>
                        <div className="flex flex-col gap-2 justify-center items-center mt-2 mb-4">
                            <div className="flex justify-center items-center mt-4 mb-4 w-full max-w-[200px] sm:max-w-[250px]">
                                <button className={theme === 'light' ? 'bg-[#A3E1ECFF] px-6 py-2 rounded-full text-sm border-2 border-[#A3E1ECFF] cursor-pointer hover:border-blue-500' :
                                    'bg-[#A3E1ECFF] px-6 py-2 rounded-full text-sm border-2 border-[#A3E1ECFF] cursor-pointer hover:border-blue-500 '} type="button">
                                    SignUp with Google
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mt-2">
                            <hr className="flex-grow border-t" />
                            <span className="px-3 text-xs sm:text-sm">Or with Email</span>
                            <hr className="flex-grow border-t" />
                        </div>
                        <div className="flex flex-col gap-4 mt-6 sm:mt-8">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Email" className="text-sm sm:text-base">Email</label>
                                    <Input_Email value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="Password" className="text-sm sm:text-base">Password</label>
                                    <Input_Password value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {error && <div className="text-red-500 text-sm">{error}</div>}
                                <button className="bg-[#122B39] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm cursor-pointer hover:bg-sky-700 w-full" type="submit">
                                    SignUp
                                </button>
                            </form>
                        </div>
                        <div className="flex gap-4 justify-center items-center mt-4 mb-4">
                            <p className="text-[#616161] text-xs sm:text-sm">
                                Already a Member?{" "}
                                <a className={theme === "light" ? "text-[#212121] underline underline-offset-1" : "text-white underline underline-offset-1"} href="/login">
                                    sign in
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-2 opacity-50 flex justify-center w-full">
                        <h6 className="text-xs">© Interest-based ADS | Don’t steal my INFO</h6>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;