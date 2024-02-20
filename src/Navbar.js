import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Result Checker</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/result">Result</Link>

        <Link to="/addresult">Add Result</Link>

        <Link to="/searchhome">SearchHome</Link>
      </div>
    </nav>
  );
};

export default Navbar;
