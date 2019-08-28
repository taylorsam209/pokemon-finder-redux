import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPokemon, setStaticPokemon } from '../reducer/reducer'
import { staticPokemon } from '../staticPokemon'

class Input extends Component {
  state = {
    input: ''
  }

  // using this.props.dispatch sends the action to the reducer
  submitStatic = () => this.props.dispatch(setStaticPokemon(staticPokemon))

  submit = () => {
    this.state.input ? this.props.dispatch(getPokemon(this.state.input)) : alert('please enter a pokemon')
  }

  render() {
    console.log('input =>', this.state.input)
    return (
      <div >
        <h1 className='header'>Pokemon Finder</h1>
        <input type='text' placeholder='Enter a pokemon' value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
        <button onClick={this.submit}>Submit</button>
        <button onClick={this.submitStatic}>Submit Static</button>
      </div>
    )
  }
}

// connects the react component to redux - this also gives access to this.props.dispatch automatically if second argument is not defined
export default connect()(Input);