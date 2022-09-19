import { useState } from "react";
import InputTask from "./InputTask";

function AddTask({ onAdd, tasks }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);

  const onSubmitted = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please give me a TASK!");
      return;
    }

    if (!date) {
      alert("Please give me a DATE!");
      return;
    }

    if (tasks.length >= 2) {
      const highestID = tasks.reduce((a, b) => {
        return Math.max((a.id, b.id), -Infinity);
      });
      onAdd({ id: highestID + 1, text: task, date: date, reminder: check });
    } else if (tasks.length === 1) {
      onAdd({ id: tasks[0].id + 1, text: task, date: date, reminder: check });
    } else {
      onAdd({ id: 1, text: task, date: date, reminder: check });
    }
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmitted}>
        <InputTask
          divClass={"form-control"}
          task={"Task"}
          type={"text"}
          placeholder={"Task"}
          value={task}
          setTask={setTask}
        />

        <InputTask
          divClass={"form-control"}
          task={"Date"}
          type={"text"}
          placeholder={"Date"}
          value={date}
          setTask={setDate}
        />

        <InputTask
          divClass={"form-control form-control-check"}
          task={"Set Reminder"}
          type={"checkbox"}
          value={check}
          setTask={setCheck}
        />

        <InputTask
          divClass={"form-control"}
          value={"Save and Add Task"}
          type={"submit"}
          placeholder={"Task"}
          inputClass={"btn btn-block"}
        />
      </form>
    </>
  );
}

export default AddTask;
