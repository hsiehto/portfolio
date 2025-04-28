import { useState } from "react";
import { Link } from "react-router-dom";
import "../component/Navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar text-style">
        <Link to="/">
          <div className="navbar-left">tom hsieh👨🏻‍💻</div>
        </Link>
        <div className="navbar-right">
          <Link to="/" className="navbar-link">
            home
          </Link>
          <Link to="/about" className="navbar-link">
            about
          </Link>
          {/* <Link to="/project" className="navbar-link">
            project
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
