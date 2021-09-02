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
  
  oneClick() {
    this.setState((estadoAnterior, _props) => ({
      oneCliques: estadoAnterior.oneCliques + 1
    }))
  }
  
  twoClick() {
    this.setState((estadoAnterior, _props) => ({
      twoCliques: estadoAnterior.twoCliques + 1
    }))
  }
  
  threeClick() {
    this.setState((estadoAnterior, _props) => ({
      threeCliques: estadoAnterior.threeCliques + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.oneClick}>{this.state.oneCliques}</button>
        <button onClick={this.twoClick}>{this.state.twoCliques}</button>
        <button onClick={this.threeClick}>{this.state.threeCliques}</button>
      </div>
    );
  }
}

export default App;
