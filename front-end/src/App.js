import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      {/* <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object> */}
      <Routes />
    </div>
  );
}

export default App;
