import React, { useContext } from 'react';
import SideBarcontents from './SideBarcontents';
import { useNavigate } from 'react-router-dom'; 
import { ThemeContext } from '../../Context/ThemeContext';

const SideBar = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');  
    alert('User logged out');

    navigate('/'); // After we connect with login and register it go to login become now test to go to home
  };

  return (
    <>
      <div className={ theme === 'dark' ? 'bg-black xs:hidden md:flex xs:w-[214px]  3xl:min-w-[300px]  flex-col gap-[110px] items-center py-5 ' :'bg-white xs:hidden md:flex xs:w-[250px] sm:3xl:min-w-[300px]  flex-col gap-[110px] items-center py-5'}>
        <div className='flex w-[159px] h-[90px] flex-col items-center'>
          <span className='w-[69px] h-[67px] text-[48px] font-bold text-[#246083]'>On</span>
          <h1 className= {theme == 'light' ?'h-[90px] text-[48px] text-black font-bold' : 'h-[90px] text-[48px] font-bold text-white'}>Time</h1>
        </div>
        <SideBarcontents />
        <div
          className='flex gap-[10px] items-center pl-[10px]'
          onClick={handleLogout} 
        >
          <figure>
            <img src="/src/assets/icons/logoutIcon.svg" alt="LogOut Icon" />
          </figure>
          <h2 className='xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold h-[46px] text-red-900'>
            LogOut
          </h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;