import React from 'react'

const SideBarResponsive = () => {
return (
    <div className='flex flex-col gap-[30px]  w-[200px] h-[250px] rounded-[20px]  py-[30px] fixed dark'>
        <div className='flex flex-col gap-[20px] w-[224px] h-[250px] pl-[30px]'>
            <div className='flex gap-[20px] items-center '>
                <figure>
                    <img src="/src/assets/icons/dashboardIcon.svg" className='w-4 h-4' alt="DashBoard Icon" />
                </figure>
                <h2 className=' font-4 font-[500] '>DashBoard</h2>
            </div>
            <div className='flex gap-[20px] items-center'>
                <figure><img src="/src/assets/icons/tasksIcon.svg" className='w-4 h-4' alt="Tasks Icon" /></figure>
                <h2 className=' font-4 font-[500] '>Tasks</h2>
            </div>
            <div className='flex gap-[20px] items-center'>
                <figure><img src="/src/assets/icons/settingicon.svg" className='w-4 h-4' alt="Setting Icon" /></figure>
                <h2 className=' font-4 font-[500] '>Setting</h2>
            </div>
        </div>
        <div className='flex gap-[10px] items-center pl-[10px]'>
            <figure><img src="/src/assets/icons/logoutIcon.svg" className='w-8 h-8' alt="Setting Icon" /></figure>
            <h2 className=' font-4 font-[500] text-red-900'>LogOut</h2>
        </div>
    </div>
)
}

export default SideBarResponsive