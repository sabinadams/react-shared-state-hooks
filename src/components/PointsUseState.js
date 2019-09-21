import React, { useState } from 'react'
import '../assets/scss/Points.scss'

function Points() {
  // Creates a state variable named 'points' whose initial value is 0
  const [ points, setPoints ] = useState(0)
  // Function that will reset the point count
  const resetPoints = () => setPoints(0)

  return (
    <div id="Points">
      <p className="title">Points (useState)</p>
      <hr className="divider"/>
      <div className="pointsContainer">
          <div className="buttons">
            {/* These buttons use the setPoints function to update the state variable's value */}
            <button className="button add" onClick={() => setPoints( points + 1 )}>Add</button>
            <button className="button subtract" onClick={() => setPoints( points - 1 )}>Subtract</button>
            <button className="button reset" onClick={resetPoints}>Reset</button>
          </div>
          <div className="outputBox">
            {/* Output the points variable */}
            <p>{ points }</p>
          </div>
      </div>
    </div>
  );
}

export default Points
