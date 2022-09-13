import Button from "./Button";

function Header({ title, onShow, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        title={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClicked={onShow}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Runner",
};

export default Header;
