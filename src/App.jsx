import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
