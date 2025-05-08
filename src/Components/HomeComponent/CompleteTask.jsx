import React, { useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ThemeContext } from '../../Context/ThemeContext';

const CompleteTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/asmaaelnaggar/Our_Api/refs/heads/main/new_api');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const allCompletedTodos = data.users.flatMap(user =>
          user.todos
            .filter(todo => todo.completed === "done")
            .map(todo => ({
              id: todo.id,
              title: todo.title,
              description: todo.description,
              start: todo.start,
              end: todo.end,
              attachments: todo.attachments,
              priority: todo.priority
            }))
        );

        setCompletedTasks(allCompletedTodos);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message || 'Failed to load completed tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedTasks();
  }, []);

  return (
    <div className={theme == "light" ? 'bg-white rounded-[10px] flex flex-col  w-[950px] p-4' : 'bg-gray-900 rounded-[10px] flex flex-col  w-[950px] p-4'}>
      <h2 className='text-[24px] font-semibold text-[#1A932E] mb-4'>Completed Tasks</h2>
      {loading ? (
        <p className="text-gray-600">Loading completed tasks...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : completedTasks.length === 0 ? (
        <p className="text-yellow-500">No completed tasks found.</p>
      ) : (
        <div className='flex flex-col gap-4'>
          {completedTasks.map(task => (
            <div key={task.id} className='flex justify-between items-center border-t border-gray-200 pt-3'>
              <div className='flex gap-[30px] items-center'>
                <FaCheckCircle className="text-green-500 text-lg" title="Completed" />
                <h3 className={theme === "light" ? 'text-[#060606] text-[14px]' : 'text-white text-[14px]'}> {task.title} </h3>
              </div>
              <div className='bg-[#B3F8BE] rounded-[20px] w-[69px] h-[24px] flex items-center justify-center'>
                <h3 className='text-[#1A932E] text-[12px]'>Approved</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompleteTask;