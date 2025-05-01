import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const LOCAL_STORAGE_KEY = 'task_users';

const TaskCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://raw.githubusercontent.com/asmaaelnaggar/Our_Api/main/Api_Task_management'
          );
          setUsers(response.data.users);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data.users));
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []);

  const updateUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));
  };

  const handleDelete = (userId, todoIndex) => {
    const updated = users.map((user) =>
      user.id === userId
        ? { ...user, todos: user.todos.filter((_, index) => index !== todoIndex) }
        : user
    );
    updateUsers(updated);
  };

  const handleEdit = (userId, todoIndex) => {
    const updatedUsers = [...users];
    const user = updatedUsers.find((u) => u.id === userId);
    const todo = user.todos[todoIndex];

    const newTitle = prompt('Edit title:', todo.title);
    const newDescription = prompt('Edit description:', todo.description);
    const newPriority = prompt('Edit priority:', todo.priority);
    const newStart = prompt('Edit start date:', todo.start);

    if (newTitle && newDescription && newPriority && newStart) {
      user.todos[todoIndex] = {
        ...todo,
        title: newTitle,
        description: newDescription,
        priority: newPriority,
        start: newStart,
      };
      updateUsers(updatedUsers);
    }
  };

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      {users.map((user) =>
        user.todos.map((todo, index) => (
          <div
            className="flex flex-col w-[301px] h-[182.87px] bg-gray-500 rounded-[10px] gap-[20px] px-[30px] py-[20px]"
            key={`${user.id}-${index}`}
          >
            <div className="flex flex-col gap-[10px]">
              <div className="bg-[#1EA7FF] w-fit rounded-[6px] py-[4px] px-[20px]">
                <h3 className="text-white text-[12px] font-medium">{todo.priority}</h3>
              </div>
              <h3 className="text-[#232360] text-[13px] font-medium">{todo.title}</h3>
              <p className="text-[#768396] text-[12px] font-medium">{todo.description}</p>
              <div className="bg-white w-fit rounded-[5px] border border-[#E2E2E2] px-[10px] py-[4px]">
                <h3 className="text-[12px] font-medium">{todo.start}</h3>
              </div>
            </div>
            <div className="justify-end w-[239px] flex gap-[15px]">
              <FaPen
                className="text-gray-800 cursor-pointer"
                onClick={() => handleEdit(user.id, index)}
              />
              <FaTrash
                className="text-gray-800 cursor-pointer"
                onClick={() => handleDelete(user.id, index)}
              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default TaskCard;
