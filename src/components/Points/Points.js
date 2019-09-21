import React, { useState } from 'react'
import './Points.scss'

function Points() {
  // Creates a state variable. We will call it count
  const [ points, setPoints ] = useState(0)

  return (
    <div id="Points">
      <p className="title">Points</p>
      <hr className="divider"/>
      <div className="pointsContainer">
          <div className="buttons">
            {/* These buttons use the setPoints function to update the state variable's value */}
            <button className="button add" onClick={() => setPoints( points + 1 )}>Add</button>
            <button className="button subtract" onClick={() => setPoints( points - 1 )}>Subtract</button>
            <button className="button reset" onClick={() => setPoints( 0 )}>Reset</button>
          </div>
          <div className="outputBox">
            <p>{ points }</p>
          </div>
      </div>
    </div>
  );
}

export default Points
