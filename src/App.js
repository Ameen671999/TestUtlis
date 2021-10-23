import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert('this is dark', 'primary')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('this is light', 'success')
    }
  };
  return (
    <>
      <Alert alert={alert} />
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} heading="Enter a text to analyze" />
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
