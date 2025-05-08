import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import Modal from './../../Components/Modal/Modal';
import AllTasks from '../../Components/HomeComponent/AllTasks';
import CompleteTask from '../../Components/HomeComponent/CompleteTask';
import WelcomeTaskManager from '../../Components/HomeComponent/WelcomeTaskManager';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [search, setSearch] = useState("");
  // const filteredUsers = users.map(user => ({
  //   ...user,
  //   todos: user.todos.filter(todo =>
  //     todo.title.toLowerCase().includes(search.toLowerCase())
  //   )
  // }));
  return (
    <div className={theme === "light" ? "bg-white flex flex-col gap-[50px] items-center py-[20px]" : "bg-gray-900 flex flex-col gap-[50px] items-center py-[20px]"}>
      <div className='w-[950px] gap-[40px] flex'>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className={`border p-2 sm:p-3 rounded-md w-full h-[48px] max-w-sm ${theme === 'light'
            ? 'border-slate-300 bg-[#F5F5F5] text-gray-900'
            : 'border-slate-600 bg-slate-800 text-white'
            } hover:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 transition duration-200 ease-in-out`}
        />
        <WelcomeTaskManager />
        <div className="flex items-center">
          <button value={isOpenModel} onClick={() => setIsOpenModel((show) => !show)} className='h-[100px] flex flex-col justify-center items-center p-2 bg-[#8380FE] border-2 border-[#8380FE] rounded-2xl cursor-pointer text-white'>
            <img src="/src/assets/icons/plus.svg" alt="" />
            ADD NEW TASK</button>
          {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}
        </div>
      </div>
      <AllTasks />
      <CompleteTask />
    </div>
  )
}

export default Home