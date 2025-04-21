
import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import PasswordUpdateForm from './Components/Inputs/PassswordForm'
import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account/Account'
import Profile from './pages/Profile/Profile'
import PasswordPage from './pages/PasswordSettings/PasswordPage'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className='flex dark'>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
  </div>
  )
}

export default App

