import React from 'react';
import './App.scss'
import PointsUseState from './components/PointsUseState'
import PointsUseReducer from './components/PointsUseReducer'

function App() {
  return (
    <div className="App">
      <PointsUseState />
      <PointsUseReducer />
    </div>
  );
}

export default App;
