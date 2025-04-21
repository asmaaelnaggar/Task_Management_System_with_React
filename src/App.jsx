import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const Forget_Password = lazy(() => import('./pages/Forget_Password/Forget_Password'));
const Set_Pass = lazy(() => import('./pages/Forget_Password/Set_Pass'));
const Success = lazy(() => import('./pages/Forget_Password/success'));
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="flex items-center justify-center space-x-2">
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin delay-300"></div>
      </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Set_Pass' element={<Set_Pass />} />
          <Route path='/Forget_Password' element={<Forget_Password />} />
          <Route
            path='*' element={
              <div className='flex justify-center items-center h-screen w-full bg-gradient-to-r from-[#4EF2E1] via-[#87BAF5] to-[#7D8FF5]'>
                <h1 className='text-3xl font-bold'>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;

