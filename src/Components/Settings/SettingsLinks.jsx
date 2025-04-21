import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  { name: "Profile", to: "/profile" ,className:"isActive" },
  { name: "Password", to: "/password" },
  { name: "Account", to: "/account" },
];

export default function NavigationLinks() {
  return (
    <div className="flex justify-around dark">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? " font-semibold"
              : " hover:text-gray-200"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}