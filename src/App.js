import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import { useState } from "react/cjs/react.development";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("this is dark", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("this is light", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> 
            <TextForm
              mode={mode}
              showAlert={showAlert}
              heading="Enter a text to analyze"
            />
          </Route>
          
        </Switch>
      </div>
      </Router>
    </>
  );
}


export default App;
