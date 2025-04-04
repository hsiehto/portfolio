import { useState } from "react";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav-bar text-style">
        <div className="nav-bar-left">tom hsieh👨🏻‍💻</div>
        <div className="nav-bar-right">
          <div>home</div>
          <div>play</div>
          <div>info</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
