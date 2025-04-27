import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Test = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/4SlamYousef/server-api-for-task-management/refs/heads/main/task.Json'
        );
        setUsers(response.data.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleUserTasks = (userId) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="task-manager">
      <h1>Task Management System</h1>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div 
              className="user-header" 
              onClick={() => toggleUserTasks(user.id)}
            >
              <h2>{user.firstName} {user.lastName}</h2>
              <span className="role-badge">{user.role}</span>
              <span className="toggle-icon">
                {selectedUserId === user.id ? '▼' : '▶'}
              </span>
            </div>
            
            {selectedUserId === user.id && (
              <div className="user-details">
                <p><strong>Email:</strong> {user.email}</p>
                
                <h3>Tasks ({user.todos.length})</h3>
                <div className="tasks-container">
                  {user.todos.map((todo) => (
                    <div key={todo.id} className={`task-card ${todo.completed ? 'completed' : ''}`}>
                      <h4>{todo.title}</h4>
                      <p>{todo.description}</p>
                      
                      <div className="task-meta">
                        <span><strong>Status:</strong> {todo.completed ? 'Completed' : 'Pending'}</span>
                        <span><strong>Time:</strong> {new Date(todo.start).toLocaleString()} - {new Date(todo.end).toLocaleString()}</span>
                      </div>
                      
                      {todo.attachments && todo.attachments.length > 0 && (
                        <div className="attachments">
                          <strong>Attachments:</strong>
                          <ul>
                            {todo.attachments.map((attachment, index) => (
                              <li key={index}>
                                <a href={attachment} target="_blank" rel="noopener noreferrer">
                                  Attachment {index + 1}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;