import "./App.css";
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import PropTypes from 'prop-types'
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtlis" aboutText="About Us" />
      <div className="container my-3">
      {/* <TextForm heading = 'Enter a text to analyze' /> */}
      <About/>
      </div>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = { // value is not given
  title: 'set title',
  aboutText: 'About'
}

export default App;
