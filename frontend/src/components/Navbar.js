import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Notities </h1>
        </Link>
        <Link to="/frontend/src/pages/AddNote.js">
        <button className="Newnote">New Note</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;