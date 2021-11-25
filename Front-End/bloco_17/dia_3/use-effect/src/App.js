import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState();
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => handleTimer());
  useEffect(() => showRandomNumber());
  useEffect(() => multipleOfThreeOrFive(), []);

  function handleTimer() {
    setTimeout(() => setTimer(timer + 1), 1000);
  }

  function showRandomNumber() {
    if (timer % 10 === 0) {
      setRandomNumber(Math.floor(Math.random() * 100))
    }
    else setRandomNumber('');
  }

  function multipleOfThreeOrFive() {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setIsShowing(true)
      setTimeout(() => setIsShowing(false), 4);
    };
  }
  return (
    <>
      <h1>UseEffect</h1>
      <section>{`Timer: ${timer}`}</section>
      <section>{`Número aleatório: ${randomNumber}`}</section>
      <section>{isShowing && 'Acerto'}</section>
    </>
  );
}

export default App;
