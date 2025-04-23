import React from 'react';
import { FiSearch, FiMoon } from 'react-icons/fi';
import { useAvatar } from '/src/Context/AvatarContext';


const TopBar = () => {
  const { avatar } = useAvatar();
 
  return (
    <div className="flex items-center w-full justify-between px-2 py-2 bg-white shadow-sm border-b border-[#ECECEC] min-h-[64px]">
        <div className="flex-1 max-w-[400px] mr-auto">
        <div className="relative">
          <input
            className="w-full rounded-[30px] border border-[#E5E7EB] pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B6E6FF]"
            placeholder="Search anything..."
            type="text"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A5B5C3] text-xl" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <FiMoon 
        className="text-2xl text-[#343434] cursor-pointer"
        
         />
        <img
          src={avatar}
          alt="Profile"
          className="w-10 h-10 object-cover rounded-full border-2 border-white shadow"
        />
      </div>
    </div>
  );
};

export default TopBar;