import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../../Components/Footer/Footer';
import SideBar from './../../Components/SideBar/SideBar';
import { ThemeContext } from './../../Context/ThemeContext';

const Layout = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? 'bg-[#F3F4F8] min-h-screen flex flex-col' : 'bg-gray-700 min-h-screen flex flex-col'}>

            <div className={theme === 'light' ? 'bg-[#F3F4F8] flex flex-1 ' : 'bg-gray-700 flex flex-1 '}>
                <SideBar />
                <main className={theme === 'light' ? 'bg-[#F3F4F8] flex-1 p-4' : 'bg-gray-700 flex-1 p-4'}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
