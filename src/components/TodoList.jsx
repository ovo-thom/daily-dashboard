"use client";
import { useState } from "react";
import { nanoid } from "nanoid";
import { FaRegTrashCan } from "react-icons/fa6";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: nanoid(), name: "Tâche 1", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

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
  }

  return (
    <div className="col-span-1 md:col-span-1 bg-green-500 text-white p-3 rounded-lg">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        Todo List 📓
      </h2>
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
            className="border rounded-lg h-10 p-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full max-w-xl"
          />
          <button className="border rounded-lg px-2 ml-4 cursor-pointer">
            Ajouter
          </button>
        </div>
      </form>
      <ul className="w-1/2 mx-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-baseline cursor-pointer border-b py-2"
          >
            {task.name}
            <span className="ml-auto flex items-center space-x-2">
              <span onClick={() => handleComplete(task.id)}>
                {task.completed ? "✅" : "⚪"}
              </span>
              <FaRegTrashCan
                onClick={() => handleDelete(task.id)}
                className="text-black cursor-pointer"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
