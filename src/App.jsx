import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import PasswordPage from './pages/PasswordSettings/PasswordPage';
import Tasks from './pages/Tasks/Tasks';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Success from './pages/Forget_Password/Success';
import Set_Pass from './pages/Forget_Password/Set_Pass';
import Forget_Password from './pages/Forget_Password/Forget_Password';
import { AvatarProvider } from './Context/AvatarContext';
import { ThemeContext } from './Context/ThemeContext';
import Layout from './pages/LayOUt/Layout';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <AvatarProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="success" element={<Success />} />
        <Route path="/set_Pass" element={<Set_Pass />} />
        <Route path="forget_Password" element={<Forget_Password />} />

        <Route path="layout" element={<Layout />}>
          <Route path="setting" element={<Profile />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="password" element={<PasswordPage />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]">
              <h1 className="text-3xl font-bold">404 Not Found</h1>
            </div>
          }
        />
      </Routes>
    </AvatarProvider>
  );
};

export default App;
