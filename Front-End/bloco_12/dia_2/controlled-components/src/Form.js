import React, { Component } from 'react';

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.

// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.

class Form extends Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      futebol: false,
      time: '',

    }

  }

    handleChange(event) {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState({
        [event.target.name]: value
      });
    }

  render() {
    return (
      <main>
        <form>
          <input type="text" placeholder="Escreva seu nome" name="nome" value={this.state.nome} onChange={this.handleChange}/>

          <input type="email" placeholder="Digite seu e-mail" name="email" value={this.state.email} onChange={this.handleChange}/>

          <label>
            Você gosta de futebol?
            <input type="checkbox" value={this.state.futebol} name="futebol" onChange={this.handleChange}/>
          </label>

          <label>
            Qual seu time?
            <select name="time" value={this.state.time} onChange={this.handleChange}>
              <option value="Fluminense">Fluminense</option>
              <option value="Flamengo">Flamengo</option>
              <option value="Botafogo">Botafogo</option>
              <option value="Vasco">Vasco</option>
            </select>
          </label>

        </form>
      </main>
    );
  }
}

export default Form;