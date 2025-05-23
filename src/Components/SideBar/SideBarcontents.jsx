import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom' // make sure you're using react-router-dom
import { ThemeContext } from '../../Context/ThemeContext';

const SideBarcontents = () => {
  const { theme } = useContext(ThemeContext);
  const linkClass = ({ isActive }) =>
    `flex group-hover:text-[#246083] ${isActive ? 'text-[#246083]' : ''}`

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex gap-[10px] items-center group'>
        <h2 className={`${theme == 'light' ? '' : 'text-white'} xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold`}>
          <NavLink to="/layout/dashboard" className={linkClass}>
            <img src="/src/assets/icons/dashboardIcon.svg" alt="DashBoard Icon" />
            DashBoard</NavLink>
        </h2>
      </div>

      <div className='flex gap-[10px] items-center group'>
        <figure>
          <img src="/src/assets/icons/tasksIcon.svg" alt="Tasks Icon" />
        </figure>
        <h2 className={theme == 'light' ? 'xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold' : 'xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold text-white'}>
          <NavLink to="/layout/tasks" className={linkClass}>Tasks</NavLink>
        </h2>
      </div>

      <div className='flex gap-[10px] items-center group'>
        <figure>
          <img src="/src/assets/icons/settingicon.svg" alt="Setting Icon" />
        </figure>
        <h2 className={theme == 'light' ? 'xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold' : 'xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold text-white'}>
          <NavLink to="/layout/setting" className={linkClass}>Setting</NavLink>
        </h2>
      </div>
    </div>
  )
}

export default SideBarcontents
