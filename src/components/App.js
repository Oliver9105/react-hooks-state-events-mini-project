import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  }

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
