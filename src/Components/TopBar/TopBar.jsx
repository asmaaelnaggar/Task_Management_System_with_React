import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useAvatar } from '/src/Context/AvatarContext';
import ResponsiveSideBar from '../SideBar/ResponsiveSideBar';
import ToggleButton from '../Buttons/ToggleButton';
import { ThemeContext } from '../../Context/ThemeContext';



const TopBar = () => {
  const { avatar } = useAvatar();
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <div className={theme === "light" ? "flex xs:gap-[5px] md:justify-between md:gap-[100px] w-full p-2 bg-white shadow-sm border-b border-[#ECECEC] min-h-[64px]" : "flex xs:gap-[5px] md:justify-between md:gap-[100px] w-full p-2 bg-black shadow-sm border-b border-[#ECECEC] min-h-[64px]"}>
        <ResponsiveSideBar/>
        <div className={theme === "light" ? "bg-white w-full ":" w-full bg-black "}>
          <div className="relative">
          <input
          className={theme === "light" 
            ? "bg-white w-full rounded-[30px] border border-[#E5E7EB] pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B6E6FF] placeholder:text-gray-400 text-black"
            : "bg-black w-full rounded-[30px] border border-[#E5E7EB] pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B6E6FF] placeholder:text-gray-500 text-white"
          }
          placeholder="Search anything..."
          type="text"
        />

          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A5B5C3] text-xl" />
        </div>
      </div>
      <div className="flex items-center gap-4 ">
      <ToggleButton/>
        <figure className="w-10 h-10">
          <img
            src={avatar}
            alt="Profile"
            className="w-10 h-10 object-cover rounded-full border-2 border-white shadow"
          />
        </figure>
      </div>
    </div>
    </>
  );
};

export default TopBar;