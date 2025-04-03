import { useState } from "react";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navBar textStyle">
        <div className="navBar-left">tom hsieh👨🏻‍💻</div>
        <div className="navBar-right">
          <div>home</div>
          <div>play</div>
          <div>info</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
