import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import Modal from './../../Components/Modal/Modal';
import { getUsers } from '../../services/ApiUsers';
import AllTasks from '../../Components/HomeComponent/AllTasks';
import CompleteTask from '../../Components/HomeComponent/CompleteTask';
import WelcomeTaskManager from '../../Components/HomeComponent/WelcomeTaskManager';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpenModel, setIsOpenModel] = useState(false);

  useEffect(function () {
    getUsers().then((data) => {
      console.log(data);
    })
  }, [])
  return (
  <div className={theme === "light" ? "bg-white flex flex-col gap-[50px] items-center py-[20px]" : "bg-[#1E1F25] flex flex-col gap-[50px] items-center py-[20px]"}>
    <div className='w-[950px] gap-[40px] flex'>
      <WelcomeTaskManager/>
      <div className="flex items-center">
        <button value={isOpenModel} onClick={() => setIsOpenModel((show) => !show)} className='h-[100px] flex flex-col justify-center items-center p-2 bg-[#8380FE] border-2 border-[#8380FE] rounded-2xl cursor-pointer text-white'>
          <img src="/src/assets/icons/plus.svg" alt="" />
          ADD NEW TASK</button>
        {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}
      </div>
    </div>
    <AllTasks/>
    <CompleteTask/>
  </div>
  )
}

export default Home