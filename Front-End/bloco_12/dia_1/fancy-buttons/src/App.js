import React, { Component } from 'react';
import './App.css';

function oneclick() {
  console.log('Primeiro botão');
}

function twoclick() {
  console.log('Segundo botão');
}

function threeclick() {
  console.log('Terceiro botão');
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={oneclick}>Primeiro botão</button>
        <button onClick={twoclick}>Segundo botão</button>
        <button onClick={threeclick}>Terceiro botão</button>
      </div>
    );
  }
}

export default App;
