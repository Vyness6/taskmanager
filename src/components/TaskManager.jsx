import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded px-2 py-1 mr-2"
          placeholder="Enter task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="mb-4">
        <Button variant="primary" onClick={() => setFilter("All")}>All</Button>
        <Button variant="secondary" onClick={() => setFilter("Active")} className="ml-2">Active</Button>
        <Button variant="danger" onClick={() => setFilter("Completed")} className="ml-2">Completed</Button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center border-b py-2">
            <span className={task.completed ? "line-through" : ""}>
              {task.text}
            </span>
            <div>
              <Button variant="secondary" onClick={() => toggleComplete(task.id)}>✓</Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)} className="ml-2">Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
