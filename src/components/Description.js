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
        <img className='img' src={pokemon.sprites.front_default} alt='poke' />
        {pokemon.sprites.back_default ? <img className='img' src={pokemon.sprites.back_default} alt='poke' /> : null}
        <div>Name: {pokemon.name}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <div>Base Exp: {pokemon.base_experience}</div>
        <div style={{ marginTop: '30px' }}>Abilities: {pokemon.abilities.map(ability => <div key={ability.name}>{ability.ability.name}</div>)}</div>
      </div>
    )
  }

  render() {
    console.log('pokemon =>', this.props.pokemon)
    if (this.props.pokemon) {
      if (this.props.pokemon === 'none found') {
        return this.renderPokemonNotFound()
      }
      else return this.renderPokemonInfo()
    }
    return this.renderPlaceholder()
  }
}


// maps the redux data store/state to props
// example => state.pokemon can now be accessed with this.props.pokemon
const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  }
}

// connect method takes in mapStateToProps, and mapDispatchToProps
export default connect(mapStateToProps)(Description);