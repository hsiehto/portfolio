import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import SocialButtons from "./component/SocialButtons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <LandingPage />
      <SocialButtons />
    </>
  );
}

export default App;
