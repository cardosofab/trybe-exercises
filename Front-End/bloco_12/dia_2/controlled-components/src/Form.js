import React, { Component } from 'react';

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

class Form extends Component {
  constructor() {
    super();
    
    this.handleChangeName = this.handleChangeName.bind(this);

    this.state = {
      nome: '',
    }

  }

    handleChangeName(event) {
      this.setState({
        nome: event.target.value
      });
    }

  render() {
    return (
      <main>
        <form>
          <input type="text" placeholder="Escreva seu nome" value={this.state.nome} onChange={this.handleChangeName}/>
          <input type="email" placeholder="Digite seu e-mail"/>
          <select />
          <textarea />
        </form>
      </main>
    );
  }
}

export default Form;