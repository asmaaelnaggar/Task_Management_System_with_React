import React from 'react'
import SettingsPage from '../SettingsPage/SettingsPage'
import AccountComponent from '../../Components/Account/AccountComponent';

const Account = () => {
return (
<div className='flex flex-col w-full bg-[#F3F4F8]'>
    <SettingsPage/>
    <AccountComponent/>
</div>
)
}

export default Account