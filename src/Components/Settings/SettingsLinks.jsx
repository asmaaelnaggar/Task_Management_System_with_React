import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
const links = [
  { name: "Profile", to: "/layout/profile", className: "isActive" },
  { name: "Password", to: "/layout/password" },
  { name: "Account", to: "/layout/account" },
];

export default function NavigationLinks() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? " bg-[#F3F4F8] flex justify-around" : "bg-gray-900 flex justify-around"}>
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