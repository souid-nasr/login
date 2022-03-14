
import './App.css';
import Login from './components/Login/Login'
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>LoginIn</button>
      {visible && <Login/>}
    </div>
  );
}

export default App;
