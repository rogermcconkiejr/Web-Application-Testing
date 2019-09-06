import React, { useState } from 'react';
import './App.css';
import Display from "./Display";
import Dashboard from "./Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  
  const addStrike = () => {
  if (strikes <3) {setStrikes(strikes + 1)
  } else {
    setStrikes(0);
    setBalls(0);
  }
  }
  const addBall = () => {
  if (balls < 4){setBalls(balls + 1)
  } else {
    setStrikes(0);
    setBalls(0);
  }
  }
  const foulBall = ()=>{
    if (strikes ==! 2){setStrikes(strikes + 1)
    } else { setStrikes(strikes === 2)};
  }
  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }
  return (
    <div className="App">
        <Display
        strikes={strikes}
        balls={balls} 
        />
        <Dashboard 
        addStrike={addStrike}
        addBall={addBall}
        foulBall={foulBall}
        hit = {hit}
        />
    </div>
  );
}

export default App;
