import { useState } from "react";
import { Link } from "react-router-dom";
import "../component/Navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav-bar text-style">
        <div className="nav-bar-left">tom hsieh👨🏻‍💻</div>
        <div className="nav-bar-right">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/project">project</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
