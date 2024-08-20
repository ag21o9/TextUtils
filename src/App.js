import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const togglefunc = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#263F49";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
    <Router>

      <Navbar title="TextUtils" func={togglefunc} mode={mode} />
      
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Textform heading={"Enter Text Here"} mode={mode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
