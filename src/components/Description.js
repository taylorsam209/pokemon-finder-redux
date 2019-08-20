import React from 'react';
import { connect } from 'react-redux';

class Description extends React.Component {

  renderPlaceholder = () => {
    return (
      <div className='desc-placeholder'>
        Pokemon Information
      </div>
    )
  }

  renderPokemonNotFound = () => {
    return (
      <div className='desc-placeholder'>
        Pokemon Not Found!
      </div>
    )
  }

  renderPokemonInfo = () => {
    const { pokemon } = this.props;
    return (
      <div className='desc'>
        <img className='img' src={pokemon ? pokemon.sprites.front_default : null} alt='poke' />
        {pokemon.sprites.back_default ? <img className='img' src={pokemon.sprites.back_default} alt='poke' /> : null}
        <div>Name: {pokemon && pokemon.name}</div>
        <div>Height: {pokemon && pokemon.height}</div>
        <div>Weight: {pokemon && pokemon.weight}</div>
        <div>Base Exp: {pokemon && pokemon.base_experience}</div>
        <div style={{ marginTop: '30px' }}>Abilities: {pokemon && pokemon.abilities.map(ability => <div key={ability.name}>{ability.ability.name}</div>)}</div>
      </div>
    )
  }

  handleView = () => {
    const { pokemon } = this.props;
    if (pokemon) {
      if (pokemon === 'none found') {
        return this.renderPokemonNotFound()
      }
      return this.renderPokemonInfo()
    }
    return this.renderPlaceholder()
  }

  render() {
    console.log(this.props.pokemon)
    return this.handleView()
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps)(Description);