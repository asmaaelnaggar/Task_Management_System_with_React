import React from 'react'
import PasswordUpdateForm from '../../Components/Forms/PassswordForm'
import SettingsPage from '../SettingsPage/SettingsPage'

const PasswordPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <SettingsPage/>
      <PasswordUpdateForm/>
    </div>
  )
}

export default PasswordPage
