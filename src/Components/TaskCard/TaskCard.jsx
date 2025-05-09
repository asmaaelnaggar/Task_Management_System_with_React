import React, { useContext, useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import Modal from './../Modal/Modal';
import { ThemeContext } from '../../Context/ThemeContext';
import ResponsiveSideBar from '../SideBar/ResponsiveSideBar';
import ResponsiveToggleButton from '../Buttons/ResponsiveToggleButton';

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const columns = [
    { id: 'todo', title: 'todo', priority: 'Low' },
    { id: 'inProgress', title: 'inProgress', priority: 'Medium' },
    { id: 'done', title: 'done', priority: 'High' },
  ];

  useEffect(() => {
    // Function to fetch and transform tasks from localStorage
    const fetchTasks = () => {
      const userData = localStorage.getItem("currentUser");
      if (userData) {
        const currentUser = JSON.parse(userData);
        const rawTasks = currentUser?.tasks || [];
        console.log("User Tasks:", rawTasks);
        // Transform tasks to match component's expected structure
        const transformedTasks = rawTasks.map((task, index) => ({
          id: task.createdAt || `task-${index}`, // Generate unique ID
          title: task.addtask,
          description: task.description,
          start: task.startdate,
          end: task.enddate,
          attachments: task.attachments,
          status: task.completed === "done" ? true : false, // Map completed to boolean status
          priority: task.completed === "todo" ? "Low" : task.completed === "inProgress" ? "Medium" : "High" // Map completed to priority
        }));
        setTasks(transformedTasks);
      }
    };

    // Initial fetch
    fetchTasks();

    // Add event listener for storage changes
    const handleStorageChange = (event) => {
      if (event.key === "currentUser") {
        fetchTasks();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array, as we handle updates via storage event

  const updateLocalStorage = (updatedTasks) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // Transform tasks back to localStorage format
    const rawTasks = updatedTasks.map(task => ({
      addtask: task.title,
      description: task.description,
      startdate: task.start,
      enddate: task.end,
      attachments: task.attachments,
      completed: task.priority === "Low" ? "todo" : task.priority === "Medium" ? "inProgress" : "done",
      createdAt: task.id
    }));
    const updatedUser = { ...currentUser, tasks: rawTasks };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  const handleToggleStatus = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    (task.title && task.title.toLowerCase().includes(search.toLowerCase())) ||
    (task.description && task.description.toLowerCase().includes(search.toLowerCase()))
  );

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleEdit = id => {
    const newTitle = prompt("New title:");
    const newDescription = prompt("New description:");
    if (!newTitle || !newDescription) return;
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleDragStart = (taskId, currentPriority) => {
    setDraggedItem({ taskId, currentPriority });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetPriority) => {
    if (!draggedItem) return;

    const { taskId } = draggedItem;
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId && task.priority !== targetPriority) {
        return { ...task, priority: targetPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
    setDraggedItem(null);
  };

  const getompletedColor = (completed) => {
    switch (completed) {
      case 'done':
        return 'bg-red-500';
      case 'todo':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const renderTasks = (priority) => {
    return filteredTasks
      .filter(task => task.priority === priority)
      .map(task => (
        <div
          key={task.id}
          className={`relative p-4 rounded shadow mb-4 cursor-grab transition-all duration-300 ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'
            } ${task.status ? 'backdrop-blur-sm opacity-70' : ''}`}
          draggable
          onDragStart={() => handleDragStart(task.id, task.priority)}
        >
          {/* <input
            type="checkbox"
            className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
            checked={task.status || false}
            onChange={() => handleToggleStatus(task.id)}
          /> */}

          <div className="flex flex-col gap-2">
            <div
              className={`${task.priority} ${theme === 'light' ? 'text-white' : 'text-slate-800'
                } w-fit rounded px-2 py-1 text-xs font-medium`}
            >
              {task.priority}
            </div>

            <h3
              className={`text-2xl font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'
                } ${task.status ? 'line-through' : ''}`}
            >
              {task.title}
            </h3>

            <p className={`text-1xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              {task.description}
            </p>
            <div className="w-fit rounded px-2 py-1 text-xs">{task.start || 'No start date'}</div>
            <div className="w-fit rounded px-2 py-1 text-xs">{task.end || 'No end date'}</div>
            <hr />
            <div className="rounded px-2 py-1 text-xs">{task.attachments.length ? task.attachments : 'No attachments'}</div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <FaPen
              className={`text-1xl ${theme === 'light' ? 'text-gray-800' : 'text-white'
                } cursor-pointer hover:text-blue-500`}
              onClick={() => handleEdit(task.id)}
            />
            <FaTrash
              className={`text-1xl ${theme === 'light' ? 'text-gray-800' : 'text-white'
                } cursor-pointer hover:text-red-500`}
              onClick={() => handleDelete(task.id)}
            />
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className="flex justify-between pr-20">
        <ResponsiveSideBar />
        <ResponsiveToggleButton />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className={`border p-2 sm:p-3 rounded-md w-full h-[48px] max-w-sm ${theme === 'light'
            ? 'border-slate-300 bg-[#F5F5F5] text-black'
            : 'border-slate-600 bg-slate-800 text-white'
            } hover:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 transition duration-200 ease-in-out`}
        />
        <button
          onClick={() => setIsOpenModel(true)}
          className="cursor-pointer p-5 pt-0.5 pb-0.5 bg-[#246083] text-white rounded-2xl font-thin"
        >
          AddTask..
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full min-h-screen p-6">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col">
            <span
              className={`h-20 ${theme === 'light' ? 'text-white bg-[#246083]' : 'text-white bg-gray-800'
                } flex justify-center items-center text-2xl font-bold rounded-xl p-4`}
            >
              {column.title}
            </span>
            <div
              className="px-4 py-4 overflow-y-auto rounded-b-xl shadow-inner space-y-4 flex-1"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.priority)}
            >
              {renderTasks(column.priority)}
            </div>
          </div>
        ))}
        {isOpenModel && <Modal setIsOpenModel={setIsOpenModel} />}
      </div>
    </>
  );
};

export default TaskCard;