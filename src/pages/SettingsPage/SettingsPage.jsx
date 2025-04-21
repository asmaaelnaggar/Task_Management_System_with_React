import React from 'react'
import NavigationLinks from '../../Components/Settings/SettingsLinks'
const SettingsPage = () => {
  return (
    <div className='flex flex-col dark'>
        <div className='flex flex-col gap-[20px] w-full'>
            <figure className='w-full'>
            <img className="w-full" src="/src/assets/images/SettingsImg.svg" alt="SettingsImg" />
            </figure>
            <h2 className='text-[32px] font-[600] pl-[20px] pb-[30px]'>Settings</h2>
        </div>
        <NavigationLinks />
    </div>
  )
}

export default SettingsPage
