import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h3 className="empty">
        About <Link to="/">Go back</Link>
      </h3>
    </>
  );
}

export default About;
