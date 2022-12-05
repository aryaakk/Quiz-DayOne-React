import { useState } from 'react';
import logo from './logo.svg';

import Button from './components/buttons/button';
import './components/buttons/button.style.css';

function App() {

  const [name, setName] = useState('JOHN WICK')
  const [counter, setCounter] = useState(0)
  const [Add, setAdd] = useState('ADD')
  const [Minus, setMinus] = useState('MINUS')
  const [reset, setReset] = useState('RESET')

  const hari = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jum`at',
    'Sabtu', 
    'Minggu'
  ]

  const inputChange = (e) => {
    setName(e.target.value)
  }

  const tambahHandeler = () => {
    setCounter(counter + 1)
  }

  const kurangHandeler = () => {
    setCounter(counter - 1)
    if (counter == 0) {
      alert('NILAI TIDAK BOLEH 0')
      setCounter(counter)
    }
  }

  const clickbutton = () => {
        alert(name);
    };

  const resetHandeler = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{counter}</h1>
      <input type="text" onChange={inputChange} />
      <Button fungsi = {clickbutton} nama={name} />
      <div className="buttonCounter">
        {counter != 0 && <Button fungsi = {kurangHandeler} nama ={Minus}/>}
        {counter != 0 && <Button fungsi = {resetHandeler} nama = {reset}/>}
        <Button fungsi = {tambahHandeler} nama = {Add}/>
      </div>
      <hr />
      <div className="Days">
        <div className="header">
          <span>NAMA HARI</span>   
        </div>
        <div className="day">
          {hari.map((item, index) =>{
            return <p>{item}</p>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
{/* <button onClick={kurangHandeler}>-</button> */ }
