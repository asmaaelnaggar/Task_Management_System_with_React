import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
// import AddTask from './../AddTask/AddTask';
import Modal from './../../Components/Modal/Modal';
import { useTaskContext } from '../../Context/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { tasks } = useTaskContext();
  console.log(tasks);
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (<>
    <div className={theme === "light" ? "bg-white w-full" : "bg-black w-full"}>
      <button value={isOpenModel} onClick={() => setIsOpenModel((show) => !show)} className='flex flex-col justify-center items-center p-8 bg-[#8380FE] border-2 border-[#8380FE] rounded-2xl cursor-pointer text-white'>
        <img src="/src/assets/icons/plus.svg" alt="" /><br />
        ADD NEW<br /> TASK</button>
      {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}

      <h1 className={`text-4xl font-bold my-4 ${theme==="light"?"text-zinc-500":"text-white"}`}>All Tasks </h1>
      <div className='flex flex-col gap-4 '>
        {tasks.map((task) => (
          <div key={task.id} className='bg-zinc-100  rounded-2xl p-4 flex justify-between gap-2 md:flex-row flex-col'>
            <div>
              <h2 className='font-bold text-xl text-blue-950'>Start from</h2>
              <p className='text-zinc-500 font-semibold '><FontAwesomeIcon icon={faClock}/>{task.startdate.split('T')[0]}</p>
            </div>
            <div>
              <h2 className='text-blue-950 text-xl font-bold'>{task.title}</h2>
              <div className='font-semibold text-blue-500'>
                {task.attachments.map((link, index) => (
                  <p key={index}><FontAwesomeIcon icon={faLink}/>{link.length > 40 ? link.substring(0, 40) + '...' : link}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className='font-bold text-xl text-blue-950'>End at</h2>
              <p className='text-zinc-500 font-semibold'><FontAwesomeIcon icon={faClock}/>{task.enddate.split('T')[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Home