import React from 'react'
import SettingsPage from '../SettingsPage/SettingsPage'
import ButtonsGroup from '../../Components/Inputs/ButtonsGroup';
import SettingsForm from '../../Components/Inputs/SettingsForm';

const Profile = () => {
return (
<div className='flex flex-col w-full '>
    <SettingsPage/>
    <ButtonsGroup />
    <SettingsForm />
    

</div>
)
}

export default Profile
