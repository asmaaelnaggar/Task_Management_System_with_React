import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const WelcomeTaskManager = () => {
    const { theme } = useContext(ThemeContext);
    return(
    <div className={theme =='light' ? "bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center w-full max-w-5xl p-4 md:p-6 pt-2 md:pt-4" : "bg-black rounded-3xl shadow-md flex flex-col md:flex-row items-center w-full max-w-5xl p-4 md:p-6 pt-2 md:pt-4"}>
      <div className="flex-1 md:pr-8 w-full text-center md:text-left">
        <div className="text-xl text-gray-400 font-Regular mb-2">
          Welcome To
        </div>
        <h1 className={theme =="light" ? "text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight whitespace-nowrap":"text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight whitespace-nowrap"}>
          Your Task Management Area
        </h1>
        <div className="text-sm sm:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Bibendum risus urna tortor praesent.
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full mt-6 md:mt-0">
        <img
          src="/src/assets/images/HeaderImg.svg"
          alt="Task illustration"
          className="w-full max-w-[300px] h-auto object-contain"
        />
        
      </div>
      
  </div>
);
}
export default WelcomeTaskManager;

