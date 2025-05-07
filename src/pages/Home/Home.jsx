import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme==="light" ?"bg-white " :"bg-black"}>
      Home
    </div>
  )
}

export default Home