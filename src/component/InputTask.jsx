function InputTask({
  task,
  placeholder,
  type,
  divClass,
  value,
  inputClass,
  setTask,
  onSubmit,
}) {
  return (
    <div className={divClass}>
      <label>{task}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClass}
        onChange={(e) => {
          type === "checkbox"
            ? setTask(e.currentTarget.checked)
            : setTask(e.target.value);
        }}
      />
    </div>
  );
}

export default InputTask;
