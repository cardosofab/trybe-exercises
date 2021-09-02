import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      oneCliques: 0,
      twoCliques: 0,
      threeCliques: 0,
    }
    
    this.oneClick = this.oneClick.bind(this)
    this.twoClick = this.twoClick.bind(this)
    this.threeClick = this.threeClick.bind(this)
  }

  changeColor(state) {
    return state % 2 === 0 ? 'green' : 'white';
  }
  
  oneClick() {
    this.setState((estadoAnterior, _props) => ({
      oneCliques: estadoAnterior.oneCliques + 1
    }), () => {
      console.log(`Botão 1 ${this.changeColor(this.state.oneCliques)}`);
    });
  }
  
  twoClick() {
    this.setState((estadoAnterior, _props) => ({
      twoCliques: estadoAnterior.twoCliques + 1
    }), () => {
      console.log(`Botão 2 ${this.changeColor(this.state.twoCliques)}`);
    });
  }
  
  threeClick() {
    this.setState((estadoAnterior, _props) => ({
      threeCliques: estadoAnterior.threeCliques + 1
    }), () => {
      console.log(`Botão 3 ${this.changeColor(this.state.threeCliques)}`);
    });
  }

  render() {
    const { oneCliques, twoCliques, threeCliques } = this.state;
    return (
      <div>
        <button 
          onClick={this.oneClick} 
          style={{backgroundColor: this.changeColor(oneCliques)}}>
            {this.state.oneCliques}
        </button>
        <button 
          onClick={this.twoClick} 
          style={{backgroundColor: this.changeColor(twoCliques)}}>
            {this.state.twoCliques}
        </button>
        <button 
          onClick={this.threeClick} 
          style={{backgroundColor: this.changeColor(threeCliques)}}>
            {this.state.threeCliques}
        </button>
      </div>
    );
  }
}

export default App;
