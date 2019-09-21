import React, { useReducer } from 'react'
import '../assets/scss/Points.scss'

// The initial state of the component
const initialState = { points: 0 }
// The reducer we are going to use
function reducer( state, action ) {
  switch (action.type) {
    case 'add':
      return { points: state.points + 1 };
    case 'subtract':
      return { points: state.points - 1 };
    case 'reset':
      return { points: 0 }
    default:
      throw new Error();
  }
}

function Points() {
  // Sets up a reducer to handle the state 
  const [ state, dispatch ] = useReducer( reducer, initialState );

  return (
    <div id="Points">
      <p className="title">Points (useReducer)</p>
      <hr className="divider"/>
      <div className="pointsContainer">
          <div className="buttons">
            {/* These buttons use the dispatch to update the state */}
            <button className="button add" onClick={() => dispatch({type: 'add'})}>Add</button>
            <button className="button subtract" onClick={() => dispatch({type: 'subtract'})}>Subtract</button>
            <button className="button reset" onClick={() => dispatch({type: 'reset'})}>Reset</button>
          </div>
          <div className="outputBox">
            {/* Output the points variable */}
            <p>{ state.points }</p>
          </div>
      </div>
    </div>
  );
}

export default Points
