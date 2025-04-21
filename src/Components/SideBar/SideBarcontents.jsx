import React from 'react'
import { Link } from 'react-router'

const SideBarcontents = () => {
  return (
    <div className='flex flex-col gap-[95px]'>
        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/dashboardIcon.svg" alt="DashBoard Icon" />
            </figure>
            <h2 className='xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold'>DashBoard</h2>
        </div>

        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/tasksIcon.svg" alt="Tasks Icon" />
            </figure>
            <h2 className='xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold'>Tasks</h2>
        </div>

        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/settingicon.svg" alt="  Setting Icon" />
            </figure>
            <h2 className='xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold'>
            <Link to="/setting">Setting</Link>
            </h2>
        </div>
    </div>
  )
}

export default SideBarcontents
