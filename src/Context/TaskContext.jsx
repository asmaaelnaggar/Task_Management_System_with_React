import React, { createContext, useState, useContext, useEffect } from "react";

export const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        try {
            const storedTasks = localStorage.getItem("tasks");
            return storedTasks ? JSON.parse(storedTasks) : [];
        } catch (error) {
            console.error("Error loading tasks from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (error) {
            console.error("Error saving tasks to localStorage:", error);
        }
    }, [tasks]);

    const addTask = (task) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { ...task, id: Date.now().toString() },
        ]);
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const updateTask = (taskId, updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
            )
        );
    };

    const value = {
        tasks,
        addTask,
        deleteTask,
        updateTask,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};
