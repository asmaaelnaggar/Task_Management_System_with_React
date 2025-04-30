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
import Account from './pages/Account/Account'
import { ThemeContext } from './Context/ThemeContext'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Success from './pages/Forget_Password/Success';
import Set_Pass from './pages/Forget_Password/Set_Pass';
import Forget_Password from './pages/Forget_Password/Forget_Password';
import AddTaskForm from './Components/AddTask/AddTaskForm';
import AddTaskCard from './Components/AddTask/AddTaskCard';



const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AvatarProvider >
      {/* <Test/> //this is the call for json file as test [we will not add it here] */}
      <TopBar />
      <div className={theme === "light" ? "flex bg-white" : "flex bg-dark"}>
        <SideBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/success' element={<Success />} />
          <Route path='/set_Pass' element={<Set_Pass />} />
          <Route path='/forget_Password' element={<Forget_Password />} />
          <Route path='*' element={
            <div className='flex justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]'>
              <h1 className='text-3xl font-bold'>404 Not Found</h1>
            </div>
          }
          />
        </Routes>
      </div>
      <Footer />
    </AvatarProvider>
  )
}
export default App