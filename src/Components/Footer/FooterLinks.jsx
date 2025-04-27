import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

function SocialMediaIcons() {
  const { theme } = useContext(ThemeContext);
  
  const iconBaseStyle = `w-[17px] h-[17px] transition duration-300 cursor-pointer ${
    theme === 'light' ? 'text-black' : 'text-white'
  }`;

  const icons = [
    {
      icon: <FaGithub className={`${iconBaseStyle} hover:text-blue-200`} />,
      link: 'https://github.com/asmaaelnaggar/Task_Management_System_with_React'
    },
    {
      icon: <FaLinkedinIn className={`${iconBaseStyle} hover:text-blue-700`} />,
      link: 'https://linkedin.com'
    },
    {
      icon: <FaTwitter className={`${iconBaseStyle} hover:text-sky-400`} />,
      link: 'https://twitter.com'
    },
    {
      icon: <FaYoutube className={`${iconBaseStyle} hover:text-red-600`} />,
      link: 'https://youtube.com'
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center text-3xl p-4">
      {icons.map((iconData, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[32px] h-[32px] rounded-full shadow-md"
        >
          <a href={iconData.link} target="_blank" rel="noopener noreferrer">
            {iconData.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
