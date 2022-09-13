import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const onDelete = (tas) => {
    const newTasks = tasks.filter((task) => task.id !== tas.id);
    setTasks(newTasks);
  };

  const onToggle = (tas) => {
    // Tutorial Solution
    //const newTasks = tasks.map((task) =>
    //  task.id === tas.id ? { ...task, reminder: !task.reminder } : task
    //);

    // My Solution
    const newTasks = [...tasks];
    const index = newTasks.indexOf(tas);
    newTasks[index] = { ...tas, reminder: !tas.reminder };
    setTasks(newTasks);
  };

  const addTask = (task) => {
    if (tasks) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
    } else {
      const newTasks = [task];
      setTasks(newTasks);
    }
  };

  const onShow = () => {
    const show = !showAddTask;
    setShowAddTask(show);
  };

  return (
    <div className="container">
      <Header onShow={onShow} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} tasks={tasks} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <h3 className="empty">Empty</h3>
      )}
    </div>
  );
}

export default App;
