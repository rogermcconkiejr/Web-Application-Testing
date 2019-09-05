import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Display";
import Dashboard from "./Dashboard";

import { useState } from 'react';
const [strike, setStrike] = useState(0);
const [ball, setBall] = useState(0);

const addStrike = () => {
if (strike <3) {setStrike(strike + 1)
} else {
  setStrike(0);
  setBall(0);
}
}
const addBall = () => {
if (ball < 4){setBall(ball + 1)
} else {
  setStrike(0);
  setBall(0);
}
}
const foulBall = ()=>{
  if (strike ==! 2){setStrike(strike + 1)
  } else { strike === 2};
}
function App() {

  return (
    <div className="App">
        <Display
        strike={stike}
        ball={ball} 
        />
        <Dashboard 
        addStrike={addStrike}
        addBall={addBall}
        foulBall={foulBall}
        />
    </div>
  );
}

export default App;
