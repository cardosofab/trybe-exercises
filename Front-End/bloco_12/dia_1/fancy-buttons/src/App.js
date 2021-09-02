import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.oneClick = this.oneClick.bind(this)
    this.twoClick = this.twoClick.bind(this)
    this.threeClick = this.threeClick.bind(this)
  }
  
  oneClick() {
    console.log('"this" do botão 1 :', this);
  }
  
  twoClick() {
    console.log('"this" do botão 2 :', this);
  }
  
  threeClick() {
    console.log('"this" do botão 3 :', this);
  }

  render() {
    return (
      <div>
        <button onClick={this.oneClick}>Primeiro botão</button>
        <button onClick={this.twoClick}>Segundo botão</button>
        <button onClick={this.threeClick}>Terceiro botão</button>
      </div>
    );
  }
}

export default App;
