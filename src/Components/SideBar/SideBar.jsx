import React from 'react'
import SideBarcontents from './SideBarcontents'

const SideBar = () => {
  return (
    <div className='flex w-[325px] bg-white rounded-[10px] flex-col gap-[120px] items-center pb-[30px]'>
        <div className='flex w-[159px] h-[90px] flex-col items-center '>
            <span className='text-[#367CB5] w-[69px] h-[67px] text-[48px] font-bold'>On</span>
            <h1 className='text-[#1A1616]  h-[90px] text-[48px] font-bold'>Time</h1>
        </div>
        <SideBarcontents/>
        <div className='flex gap-[10px] items-center'>
            <figure>
                <img src="/src/assets/icons/logoutIcon.svg" alt="DashBoard Icon" />
            </figure>
            <h2 className='text-[32px] font-bold h-[46px] text-red-900' >LogOut</h2>
        </div>
    </div>
  )
}

export default SideBar