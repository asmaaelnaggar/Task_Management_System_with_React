
import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import AddTaskForm from './Components/AddTaskForm'
import ThemeToggle from './Components/ThemeToggle'
import AddTaskCard from './Components/AddTaskCard'

function App() {
  return (
    <div className='bg-gray-400'>
      <SideBar />
      <AddTaskForm />
      <ThemeToggle />
      <AddTaskCard />
    </div>
  )
}

export default App

