import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar title="TextUtlis" aboutText="About Us" />
      <div className="container my-3">
      <TextForm heading = 'Enter a text to analyze' />
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
