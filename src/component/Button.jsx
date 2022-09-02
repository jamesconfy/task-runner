function Button({ color, title, onClicked }) {
  return (
    <>
      <button
        onClick={onClicked}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {title}
      </button>
    </>
  );
}

Button.defaultProps = {
  color: "steelblue",
  title: "Default Text",
  onClicked: () => {
    console.log("Hello!");
  },
};

export default Button;
