import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val,setval] = useState();
  let [val1,setval1] = useState();
  let [ans,setans] = useState();
  
  const sum = () => {
    setans(parseInt(val) + parseInt(val1))
  }
 
  const sub = () => {
    setans(parseInt(val) - parseInt(val1))
  }

  const mul = () => {
    setans(parseInt(val) * parseInt(val1))
  }

  const div = () => {
    setans(parseInt(val) / parseInt(val1))
  }


  return (
    <div className="App">
      <p><input type='text' onChange={(y) => {setval(y.target.value)}}></input></p>
      <p><input type='text' onChange={(y) => {setval1(y.target.value)}}></input></p>
      <p><input type='text' value={ans}></input></p>

      <p style={{marginleft:'30px'}}>
        <input type='button' value='sum' onClick={sum}></input>
        <input type='button' value='sub' onClick={sub}></input>
        <input type='button' value='mul' onClick={mul}></input>
        <input type='button' value='div' onClick={div}></input>
      </p>

    </div>
  );
}

export default App;
