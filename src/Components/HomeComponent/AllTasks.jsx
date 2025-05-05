import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FaRegClock, FaPaperclip } from 'react-icons/fa';
import { ThemeContext } from '../../Context/ThemeContext';

const AllTasks = ({ tasks: incomingTasks }) => {
  const [tasks, setTasks]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const { theme } = useContext(ThemeContext);

  const loadFromStorage = useCallback(() => {
    setLoading(true);
    setError(null);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser?.tasks?.length) {
      setTasks(currentUser.tasks);
      setLoading(false);
    } else {
      setTasks([]);
      setError("No tasks found for the current user.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(incomingTasks)) {
      // If tasks prop is provided, use it
      setTasks(incomingTasks);
      setLoading(false);
      setError(null);
      return;
    }
    // Otherwise, load from localStorage on mount
    loadFromStorage();
    // And listen for storage updates
    window.addEventListener('tasksUpdated', loadFromStorage);
    return () => {
      window.removeEventListener('tasksUpdated', loadFromStorage);
    };
  }, [incomingTasks, loadFromStorage]);

  return (
    <div className={`flex flex-col gap-[20px] rounded-[20px] py-[10px] ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}>
      <h2 className="text-[#232360] font-bold text-[30px] pl-[30px]">All Tasks</h2>
      <div className="flex flex-col gap-[20px] pl-[30px] pr-[30px]">
        {loading
          ? <p className="text-gray-600">Loading tasks...</p>
          : error
            ? <p className="text-red-500">Error: {error}</p>
            : tasks.length === 0
              ? <p className="text-yellow-500">No tasks found.</p>
              : tasks.map(task => <TaskItem key={task.startdate} task={task} />)
        }
      </div>
    </div>
  );
};

const TaskItem = ({ task }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex h-[85px] w-[950px] rounded-[20px] py-[20px] px-[80px] justify-between ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}>
      {/* Start From */}
      <div className="flex flex-col gap-[10px] w-[130px]">
        <h2 className={`text-[14px] font-medium ${theme === "light" ? "text-black" : "text-white"}`}>
          Start From
        </h2>
        <div className="flex items-center gap-[10px] text-sm text-gray-500">
          <FaRegClock />
          <span>{new Date(task.startdate).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Title & Attachment */}
      <div className="flex flex-col gap-[10px] w-[370px]">
        <h2 className={`text-[14px] font-medium ${theme === "light" ? "text-black" : "text-white"}`}>
          {task.addtask || 'Untitled Task'}
        </h2>
        <div className="flex items-center gap-[10px] text-sm text-gray-700">
          <FaPaperclip />
          <span className="w-fit text-[#5453F6]">
            {task.attachments.length ? task.attachments[0] : 'No attachment'}
          </span>
        </div>
      </div>

      {/* End At */}
      <div className="flex flex-col gap-[10px] w-[130px]">
        <h2 className={`text-[14px] font-medium ${theme === "light" ? "text-black" : "text-white"}`}>
          End At
        </h2>
        <div className="flex items-center gap-[10px] text-sm text-gray-500">
          <FaRegClock />
          <span>{new Date(task.enddate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
