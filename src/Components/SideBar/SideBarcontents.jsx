import React from 'react'

const SideBarcontents = () => {
  return (
    <div className='flex flex-col gap-[60px]'>
        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/dashboardIcon.svg" alt="DashBoard Icon" />
            </figure>
            <h2 className='text-[32px] font-bold'>DashBoard</h2>
        </div>

        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/tasksIcon.svg" alt="DashBoard Icon" />
            </figure>
            <h2 className='text-[32px] font-bold'>Tasks</h2>
        </div>

        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/settingicon.svg" alt="DashBoard Icon" />
            </figure>
            <h2 className='text-[32px] font-bold'>Setting</h2>
        </div>
    </div>
  )
}

export default SideBarcontents
