import React, { useContext } from 'react'
import SideBar from './Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import PasswordPage from './pages/PasswordSettings/PasswordPage'
import Home from './pages/Home/Home'
import { AvatarProvider } from './Context/AvatarContext';
import Footer from './Components/Footer/Footer'
import TopBar from './Components/TopBar/TopBar'
import Tasks from './pages/Tasks/Tasks'
import Test from './Components/test'
import Account from './pages/Account/Account'
import { ThemeContext } from './Context/ThemeContext'

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AvatarProvider >
      {/* <Test/> //this is the call for json file as test [we will not add it here] */} 
    <TopBar/>
    <div className={theme === "light" ? "flex bg-white" :"flex bg-dark"}>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home " element={<Home />} />
        <Route path="/setting" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
    <Footer/>
  </AvatarProvider>
  )
}
export default App