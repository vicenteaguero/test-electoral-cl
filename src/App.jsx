// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Test from "./pages/Test";
import About from "./pages/About";
import "./styles/base.css";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
