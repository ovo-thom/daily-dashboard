"use client";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { FaRegTrashCan } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Charger les tâches depuis localStorage au démarrage
  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Sauvegarder les tâches dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const copyTasks = [...tasks];

    const newTaskObj = {
      id: nanoid(),
      name: newTask,
      completed: false,
    };

    copyTasks.push(newTaskObj);
    setTasks(copyTasks);
    setNewTask("");
  };

  const handleDelete = (id) => {
    const copyTasks = [...tasks];
    const deletedTask = copyTasks.filter((task) => task.id !== id);
    setTasks(deletedTask);
  };

  const handleComplete = (id) => {
    const copyTasks = [...tasks];
    const taskToComplete = copyTasks.find((task) => task.id === id);
    taskToComplete.completed = !taskToComplete.completed;
    setTasks(copyTasks);
  };

  return (
    <div className="col-span-1 md:col-span-3 bg-black/10 backdrop-blur-xl text-gray-200 font-bold p-3 rounded-lg">
      <div className="flex justify-center items-center mb-4 space-x-2">
        <h2 className="text-base font-semibold tracking-widest sm:text-lg md:text-xl lg:text-2xl text-center">
          Todo List
        </h2>
        <FcTodoList className="text-3xl" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center my-2"
      >
        <div className="w-82 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Ajouter une tâche"
            className="border rounded-lg h-10 p-2 placeholder-gray-200 font-light text-sm focus:outline-none focus:ring-2 focus:ring-white w-full max-w-xl"
          />
          <button type="submit" className="border rounded-lg px-2 ml-4 cursor-pointer hover:border hover:border-green-300">
            Ajouter
          </button>
        </div>
      </form>
      <ul className="w-[65%] mx-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-baseline text-sm font-semibold cursor-pointer border-b border-b-green-300 py-2"
          >
            {task.name}
            <span className="ml-auto flex items-center space-x-2">
              <span onClick={() => handleComplete(task.id)}>
                {task.completed ? "✅" : "⚪"}
              </span>
              <FaRegTrashCan
                onClick={() => handleDelete(task.id)}
                className="text-stone-800 cursor-pointer text-base"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
