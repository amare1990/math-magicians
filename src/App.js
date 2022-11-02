import './App.css';
import parse from 'html-react-parser';
import Calculator from './components/Calculator';
import './components/styles.css';
/* import calcWrapper from './components/Calculator';
import calcStr from './components/Calculator'; */

const calcObj = new Calculator();

function App() {
  return (
    <div className="App">
      { parse(calcObj.parseStr()) }
    </div>
  );
}

export default App;
