import React, { useState, useEffect, useRef } from 'react';
import SideBarResponsive from './SideBarResponsive';

const ResponsiveSideBar = () => {
  const [activeDown, setActiveDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDown(false);
      }
    };

    if (activeDown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDown]);

  return (
    <div className="  relative" ref={dropdownRef}>
      <figure
        className="md:hidden w-[32px] h-[48px] flex items-center"
        onClick={() => setActiveDown((prev) => !prev)}
      >
        <img src="/src/assets/icons/responsiveSide.svg" alt="SideBar Icon" />
      </figure>
      {activeDown && <SideBarResponsive />}
    </div>
  );
};

export default ResponsiveSideBar;

