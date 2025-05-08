import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

const SideBarResponsive = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const linkClass = ({ isActive }) =>
    `font-bold font-[500] ${isActive ? 'text-[#246083]' : (theme === 'light' ? 'text-black' : 'text-white')}`;

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    console.log('User logged out');
    navigate('/'); // we will link with login it will go to login
  };

  return (
    <div className={theme == "light" ? 'bg-white flex flex-col gap-[30px] w-[200px] h-[250px] rounded-[20px] py-[30px] absolute  z-1000' : 'flex flex-col gap-[30px] w-[200px] h-[250px] rounded-[20px] py-[30px] absolute bg-gray-900 z-1000'}>
      <div className='flex flex-col gap-[20px] w-[224px] h-[250px] pl-[30px]'>
        <div className='flex gap-[20px] items-center'>
          <figure>
            <img src="/src/assets/icons/dashboardIcon.svg" className='w-4 h-4' alt="Dashboard Icon" />
          </figure>
          <NavLink to="layout/dashboard" className={linkClass}>
            DashBoard
          </NavLink>
        </div>

        <div className='flex gap-[20px] items-center'>
          <figure>
            <img src="/src/assets/icons/tasksIcon.svg" className='w-4 h-4' alt="Tasks Icon" />
          </figure>
          <NavLink to="layout/taskCard" className={linkClass}>
            Tasks
          </NavLink>
        </div>

        <div className='flex gap-[20px] items-center'>
          <figure>
            <img src="/src/assets/icons/settingicon.svg" className='w-4 h-4' alt="Setting Icon" />
          </figure>
          <NavLink to="layout/setting" className={linkClass}>
            Settings
          </NavLink>
        </div>
      </div>

      <div
        className='flex gap-[10px] items-center pl-[10px]'
        onClick={handleLogout}
      >
        <figure>
          <img src="/src/assets/icons/logoutIcon.svg" className='w-8 h-8' alt="Logout Icon" />
        </figure>
        <h2 className='font-4 font-[500] text-red-900'>LogOut</h2>
      </div>
    </div>
  );
};

export default SideBarResponsive;