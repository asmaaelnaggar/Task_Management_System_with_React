import React, { useContext } from 'react'
import SettingsPage from '../SettingsPage/SettingsPage'
import SettingsForm from '../../Components/Settings/SettingsForm';
import { ThemeContext } from '../../Context/ThemeContext';

const Profile = () => {
    const { theme } = useContext(ThemeContext);
return (
<div className={theme === "light" ? 'flex flex-col w-full bg-[#F3F4F8]':'flex flex-col w-full bg-black'}>
    <SettingsPage/>
    <SettingsForm />
</div>
)
}

export default Profile