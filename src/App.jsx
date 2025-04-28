import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";

// import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
