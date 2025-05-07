import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
const links = [
  { name: "Profile", to: "/profile" ,className:"isActive" },
  { name: "Password", to: "/password" },
  { name: "Account", to: "/account" },
];

export default function NavigationLinks() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? " bg-[#F3F4F8] flex justify-around" : "bg-black flex justify-around"}>
      {links.map((link) => (
        <NavLink
        key={link.name}
        to={link.to}
        className={({ isActive }) => {
          if (isActive) {
            return "font-bold text-[#246083] hover:text-[#246083]";
          } else {
            return theme === 'light'
              ? "text-black hover:text-[#246083]"
              : "text-white hover:text-[#246083]";
          }
        }}
      >
        {link.name}
      </NavLink>
      
      
      ))}
    </div>
  );
}