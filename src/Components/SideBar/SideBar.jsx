import React, { useContext } from 'react';
import SideBarcontents from './SideBarcontents';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import { AvatarContext } from '../../Context/AvatarContext';
import ToggleButton from '../ToggleThemeButton/ToggleButton';

const SideBar = () => {
  const { theme } = useContext(ThemeContext);
  const { avatar, resetAvatar } = useContext(AvatarContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    alert('User logged out');
    navigate('/'); // Redirect to login or home page
  };

  return (
    <div
      className={
        theme === 'dark'
          ? 'bg-gray-900 xs:hidden md:flex xs:w-[214px] 3xl:min-w-[300px] flex-col justify-between items-center py-5 h-screen rounded-r-lg'
          : 'bg-white xs:hidden md:flex xs:w-[250px] sm:3xl:min-w-[300px] flex-col justify-between items-center py-5 h-screen rounded-r-lg'
      }
    >
      {/* Toggle Theme Button */}
      <ToggleButton />



      {/* Logo Section */}
      <div className="flex size-16 flex-col items-center">
        <span className="w-[69px] h-[67px] text-4xl font-bold text-[#246083]">On</span>
        <h1
          className={
            theme === 'light'
              ? 'h-[90px] text-4xl text-black font-bold'
              : 'h-[90px] text-4xl font-bold text-white'
          }
        >
          Time
        </h1>
      </div>

      {/* Sidebar Contents */}
      <SideBarcontents />

      {/* Logout Section */}
      <div
        className="flex gap-[10px] items-center pl-[10px] mb-5 cursor-pointer"
        onClick={handleLogout}
      >
        <h2 className="flex xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold h-[46px] text-red-900">
          <img src="/src/assets/icons/logoutIcon.svg" alt="LogOut Icon" />
          LogOut
        </h2>
      </div>
      {/* Avatar Section */}
      <figure className="w-20 h-20">
        <img
          src={avatar}
          alt="Profile"
          className="w-20 h-20 object-cover rounded-full border-2 border-white shadow"
        />
        {/* <button
          onClick={resetAvatar}
          className="mt-2 text-sm text-blue-500 hover:underline"
        >
          Reset Avatar
        </button> */}
      </figure>
    </div>
  );
};

export default SideBar;