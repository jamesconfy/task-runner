import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onShow, showAdd }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          title={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onClicked={onShow}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Runner",
};

export default Header;
