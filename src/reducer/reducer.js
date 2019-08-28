import axios from 'axios';

// CONSTANTS
const SET_STATIC_POKEMON = 'SET_STATIC_POKEMON';
const GET_POKEMON = 'GET_POKEMON';

// INITIAL STATE - The Redux state
const initialState = {
    listings: '',
    pokemon: ''
}

// ACTIONS - must return an object with 2 properties: type and payload
export function setStaticPokemon(pokemon) {
    return {
        type: SET_STATIC_POKEMON,
        payload: pokemon
    }
}

// Special Action - Async promise call 
export function getPokemon(pokemon) {
    const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.data)
    return {
        type: GET_POKEMON,
        payload: data
    }
}

// REDUCER - takes in the redux state and actions as arguments
// each case will return a new state and must not change the original state.
// state must not be mutated. Make a copy of state and change the copy.

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_STATIC_POKEMON:
            //do more logic here
            return Object.assign({}, state, { pokemon: action.payload });

        case GET_POKEMON + '_REJECTED':
            return Object.assign({}, state, { pokemon: 'none found' });

        case GET_POKEMON + '_FULFILLED':
            return Object.assign({}, state, { pokemon: action.payload });

        default:
            return state
    }
}