import React from 'react';
import './App.scss'
import PointsUseState from './components/PointsUseState'
import PointsUseReducer from './components/PointsUseReducer'
import StateApp from './StateApp'

function App() {
  return (
    <div className="App">
      <PointsUseState />
      <PointsUseReducer />
      <StateApp />
    </div>
  );
}

export default App;
