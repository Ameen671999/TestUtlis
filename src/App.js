import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  };
  return (
    <>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter a text to analyze"/>
        {/* <About/> */}
      </div>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  // value is not given
  title: "set title",
  aboutText: "About",
};

export default App;
