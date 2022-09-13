import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch("http://localhost:5000/tasks")
        .then((response) => response.json())
        .then((data) => setTasks(data));

    fetchData();
  }, []);

  const [showAddTask, setShowAddTask] = useState(false);

  const onDelete = async (tas) => {
    await fetch(`http://localhost:5000/tasks/${tas.id}`, {
      method: "DELETE",
    });

    const newTasks = tasks.filter((task) => task.id !== tas.id);
    setTasks(newTasks);
  };

  const onToggle = async (tas) => {
    // Tutorial Solution
    //const newTasks = tasks.map((task) =>
    //  task.id === tas.id ? { ...task, reminder: !task.reminder } : task
    //);

    // My Solution
    const res = await fetch(`http://localhost:5000/tasks/${tas.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...tas, reminder: !tas.reminder }),
    });

    const data = await res.json();
    const newTasks = [...tasks];
    const index = newTasks.indexOf(tas);
    newTasks[index] = data;
    setTasks(newTasks);
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const onShow = () => {
    const show = !showAddTask;
    setShowAddTask(show);
  };

  return (
    <Router>
      <div className="container">
        <Header onShow={onShow} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} tasks={tasks} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
        ) : (
          <h3 className="empty">Empty</h3>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
