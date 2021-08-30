import React, { Component } from 'react';
import pokemons from './data';
import PropTypes from 'prop-types';

console.log(pokemons);

class Pokemon extends Component {
  render() {
    const pokemon = pokemons.map((pokemon) => {
      return (
        <div className="pokemon">
          <li key={pokemon.id}>
            {pokemon.name}
            <br />
            {pokemon.type}
            <br />
            {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}
            <br />
          </li>
          <img src={pokemon.image} alt={pokemon.name}/>
        </div>
      );
    });
    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,  
}

export default Pokemon;