import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <button>Dashboard</button>
      </Link>

      <Link to="/chart">
        <button>Chart</button>
      </Link>

      <Link to="/history">
        <button>History</button>
      </Link>

      <Link to="/settings">
        <button>Settings</button>
      </Link>
    </nav>
  );
}

export default Navbar;