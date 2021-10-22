import "./App.css";
import Navbar from './components/Navbar'
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar title="TextUtlis" aboutText="About Us" />
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
