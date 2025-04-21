import React from 'react'
import SideBarcontents from './SideBarcontents'
import ResponsiveSideBar from './ResponsiveSideBar'
const SideBar = () => {
  return (
    <div>
      <div className='xs:hidden md:flex xs:w-[250px] sm: 3xl:w-[330px]  rounded-[10px] flex-col gap-[110px] items-center py-5'>
          <div className='flex w-[159px] h-[90px] flex-col items-center'>
              <span className=' w-[69px] h-[67px] text-[48px] font-bold'>On</span>
              <h1 className=' h-[90px] text-[48px] font-bold'>Time</h1>
          </div>
          <SideBarcontents/>
          <div className='flex gap-[10px] items-center pl-[10px]'>
              <figure>
                  <img src="/src/assets/icons/logoutIcon.svg" alt="LogOut Icon" />
              </figure>
              <h2 className='xs:text-[25px] sm:text-[28px] 3xl:text-[32px] font-bold h-[46px] text-red-900' >LogOut</h2>
          </div>
      </div>
      <ResponsiveSideBar/>
    </div>
  )
}
export default SideBar