import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

const Tasks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light"?"bg-white ":"bg-black"}>
      Tasks
    </div>
  )
}

export default Tasks
