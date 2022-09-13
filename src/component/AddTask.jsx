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

    onAdd({ text: task, date: date, reminder: check });
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
