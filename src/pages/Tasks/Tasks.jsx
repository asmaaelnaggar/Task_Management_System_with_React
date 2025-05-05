import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import Modal from './../../Components/Modal/Modal';

const Tasks = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (<>
    <div className={theme === "light" ? "bg-white " : "bg-black"}>
      <div className='text-5xl font-bold text-center p-5 left-5'>
        <h1>🔥Task</h1>
      </div>
      <div className='flex justify-between w-full gap-9'>
        <div className='flex gap-2.5 justify-between p-2.5 border-2 rounded-2xl'>
          <p className='text-4xl'>TO DO</p>
          <button value={isOpenModel} onClick={() => setIsOpenModel((show) => !show)} className='cursor-pointer'>
            <img src="/src/assets/icons/plus2.svg" /></button>
        </div>
        <div className='flex gap-2.5 justify-between p-2.5 border-2 rounded-2xl'>
          <p className='text-4xl'>IN PROGRESS</p>
        </div>
        <div className='flex gap-2.5 justify-between p-2.5 border-2 rounded-2xl'>
          <p className='text-4xl'>DONE</p>

        </div>
      </div>
      {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}
    </div>
  </>
  )
}

export default Tasks
