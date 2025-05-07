import React, { useContext } from 'react';
import SocialMediaIcons from './FooterLinks';
import { ThemeContext } from '../../Context/ThemeContext';
const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={theme === "light" ? "bg-white flex w-full py-4 justify-center items-center xs:flex-col" : "bg-black flex w-full py-4 justify-center items-center xs:flex-col"}>
            <span className={theme === "light" ? "py-4 text-center text-xs text-[#696b6c] font-bold bg-white" : "py-4 text-center text-xs text-[#a9abad] font-bold bg-black"}>
                © 2025 OnTime. All rights reserved.
            </span>
            <SocialMediaIcons />
        </footer>
    );
};

export default Footer;