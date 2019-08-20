import React from 'react';
import Description from './Description'
import { connect } from 'react-redux';
import { getPokemon, setStaticPokemon } from '../reducer/reducer'
import {staticPokemon} from '../staticPokemon'

class Input extends React.Component {
  state = {
    input: ''
  }


  //using this.props.dispatch sends the action to the reducer
  setStaticPokemon = () => this.props.dispatch(setStaticPokemon(staticPokemon))

  getPokemon = () => {
    const { input } = this.state;
    input ? this.props.dispatch(getPokemon(input)) : alert('please enter a pokemon')
  }



  render() {
    return (
      <div >
        <h1 className='header'>Pokemon Finder</h1>
        <input type='text' placeholder='Enter a pokemon' value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
        <button onClick={this.getPokemon}>Submit</button>
        <button onClick={this.setStaticPokemon}>Submit Static</button>
        <Description />
      </div>
    )
  }
}


// connects the react component to the redux state - this also gives access to this.props.dispatch automatically
export default connect()(Input);