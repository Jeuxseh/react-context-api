import React, { Component } from 'react';
import axios from 'axios';

class PokemonList extends Component {

  state = {
    pokemons: [],
    status: "isLoading",
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(({ data }) => {
        this.setState({
          pokemons: data.results,
          status: 'isLoaded',
        })
      })
      .catch(err => {
        this.setState({
          status: 'Error'
        })
        console.log(err);
      })
  }

  renderPokemonList = () => {
    return (
      this.state.pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))
    )
  }

  render() {
    const { status } = this.state;
    switch (status) {
      case 'isLoading':
        return 'Loading...';
      case 'isLoaded':
        return <div>
          <h1>My Pokemons</h1>
          <ul>
            {this.renderPokemonList()}
          </ul>
        </div>
      case 'Error':
        return 'Me espiché...';
      default:
        break;
    }
  }
}

export default PokemonList;