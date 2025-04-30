import React, { useContext } from "react";
import Input_Password from "../../Components/Input/Input_Password";
import Input_Email from "../../Components/Input/Input_Email";
import ToggleButton from "../../Components/ToggleThemeButton/ToggleButton";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Context/ThemeContext";

const handleSubmit = () => {
    alert("welcom in OnTime");
};

const Register = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div
                className={
                    theme === "light"
                        ? "flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5] px-4 sm:px-6 lg:px-8"
                        : "flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-all duration-500 px-4 sm:px-6 lg:px-8"
                }
            >

                <ToggleButton />
                <figure className="fixed top-0 right-0">
                    <img src="/src/assets/icons/flowers_Top.svg" alt="" />
                </figure>
                <figure className="fixed left-0 bottom-0">
                    <img src="/src/assets/icons/flowers_Bottom.svg" alt="" />
                </figure>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-xs sm:max-w-sm"
                >
                    <div
                        className={
                            theme === "light"
                                ? "relative flex flex-col w-full h-fit shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-white"
                                : "relative flex flex-col w-full h-fit shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-black text-[#A6A5A5]"
                        }
                    >
                        {/* Welcoming */}
                        <div className="space-y-4">
                            <h2
                                className={
                                    theme === "light"
                                        ? "text-lg sm:text-xl md:text-2xl font-bold font-sans text-black"
                                        : "text-lg sm:text-xl md:text-2xl font-bold font-sans text-[#A6A5A5]"
                                }
                            >
                                Create Your Account.
                            </h2>
                            <div className="flex flex-col gap-2 justify-center items-center mt-2 mb-4">
                                {/* Google sign in */}
                                <div className="flex justify-center items-center mt-4 mb-4 w-full max-w-[200px] sm:max-w-[250px]">
                                    <button
                                        className={theme === 'light' ? 'bg-#A3E1ECFF px-6 py-2 rounded-full text-sm border-2 border#A3E1ECFF cursor-pointer transform-0.3s  hover:border-blue-500' :
                                            'bg-#A3E1ECFF px-6 py-2 rounded-full text-sm border-2 border#A3E1ECFF! cursor-pointer transform-0.3s text-black  hover:text-black! hover:border-blue-500 bg-[#E3F3FB]'}
                                        type="button"
                                    >
                                        <svg
                                            className="inline mr-2 w-5 sm:w-6"
                                            width="29"
                                            height="29"
                                            viewBox="0 0 29 29"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_347_559)">
                                                <path
                                                    d="M28.227 14.8223C28.227 13.8706 28.1499 12.9138 27.9853 11.9775H14.78V17.3687H22.342C22.0283 19.1074 21.02 20.6456 19.5436 21.623V25.121H24.0551C26.7044 22.6827 28.227 19.0817 28.227 14.8223Z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M14.78 28.5009C18.5559 28.5009 21.7402 27.2611 24.0602 25.1211L19.5487 21.6231C18.2935 22.477 16.6731 22.9606 14.7852 22.9606C11.1328 22.9606 8.03596 20.4965 6.92481 17.1836H2.26929V20.7897C4.64592 25.5172 9.48663 28.5009 14.78 28.5009Z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M6.91966 17.1842C6.33322 15.4454 6.33322 13.5626 6.91966 11.8239V8.21777H2.26928C0.283612 12.1737 0.283612 16.8343 2.26928 20.7903L6.91966 17.1842Z"
                                                    fill="#FBBC04"
                                                />
                                                <path
                                                    d="M14.78 6.04127C16.776 6.01041 18.7051 6.76146 20.1506 8.14012L24.1477 4.14305C21.6167 1.76642 18.2575 0.45979 14.78 0.500943C9.48663 0.500943 4.64592 3.48459 2.26929 8.21728L6.91966 11.8234C8.02567 8.50536 11.1276 6.04127 14.78 6.04127Z"
                                                    fill="#EA4335"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_347_559">
                                                    <rect
                                                        width="28"
                                                        height="28"
                                                        fill="white"
                                                        transform="translate(0.5 0.5)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        SignUp with Google
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <hr className="flex-grow border-t" />
                                <span className="px-3 text-xs sm:text-sm">Or with Email</span>
                                <hr className="flex-grow border-t" />
                            </div>
                            {/* Start of the data input */}
                            <div className="flex flex-col gap-4 mt-6 sm:mt-8">
                                <form action="/submit" className="flex flex-col gap-6 sm:gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="Email" className="text-sm sm:text-base">
                                            Email
                                        </label>
                                        <Input_Email />
                                        <label htmlFor="Password" className="text-sm sm:text-base">
                                            Password
                                        </label>
                                        <Input_Password />
                                    </div>
                                    <button
                                        className="bg-[#122B39] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm cursor-pointer hover:bg-sky-700 w-full"
                                        onClick={handleSubmit}
                                        type="submit"
                                    >
                                        SignUp
                                    </button>
                                </form>
                            </div>
                            {/* End of the data input */}
                        </div>
                        {/* Send to the registration */}
                        <div className="flex gap-4 justify-center items-center mt-4 mb-4">
                            <p className="text-[#616161] text-xs sm:text-sm">
                                Already a Member?{" "}
                                <a
                                    className={
                                        theme === "light"
                                            ? "text-[#212121] underline underline-offset-1"
                                            : "text-white underline underline-offset-1"
                                    }
                                    href="/Login"
                                >
                                    sign in
                                </a>
                            </p>
                        </div>
                        <div className="absolute bottom-2 opacity-50 flex justify-center w-full">
                            <h6 className="text-xs">
                                © Interest-based ADS | Don’t steal my INFO
                            </h6>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Register;
