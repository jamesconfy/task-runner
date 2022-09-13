import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h4>Copyright &copy; 2021</h4>
      <nav>
        <ul className="footer-list">
          <li className="footer-list-li">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
