import React, { useContext } from 'react'
import NavigationLinks from '../../Components/Settings/SettingsLinks'
import SettingsHeader from '../../Components/Settings/SettingsHeader';
import { ThemeContext } from '../../Context/ThemeContext';
import ResponsiveSideBar from './../../Components/SideBar/ResponsiveSideBar';
const SettingsPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? 'flex flex-col bg-[#F3F4F8]' : 'flex flex-col bg-gray-900'}>
      <ResponsiveSideBar />
      <SettingsHeader />
      <NavigationLinks />
    </div>

  )
}

export default SettingsPage


