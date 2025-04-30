import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }),
        [darkMode];
    const changeTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <button
            onClick={changeTheme}
            className="flex-justify-center items-center p-3
            bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 fixed top-2 right-2"
        >
            {darkMode ? (<FontAwesomeIcon icon={faSun} />)
                : <FontAwesomeIcon icon={faMoon} />
            }
        </button>
    );
};

export default ThemeToggle;