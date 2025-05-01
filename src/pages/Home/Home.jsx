import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
// import AddTask from './../AddTask/AddTask';
import Modal from './../../Components/Modal/Modal';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (<>
    <div className={theme === "light" ? "bg-white " : "bg-black"}>
      <button value={isOpenModel} onClick={() => setIsOpenModel((show) => !show)} className='flex flex-col justify-center items-center p-8 bg-[#8380FE] border-2 border-[#8380FE] rounded-2xl cursor-pointer text-white'>
        <img src="/src/assets/icons/plus.svg" alt="" /><br />
        ADD NEW<br /> TASK</button>
      {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}
    </div>
  </>
  )
}

export default Home