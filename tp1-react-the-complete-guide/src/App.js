import React from 'react';
import './App.css';
import './Components/User/UserInput'
import './Components/User/UserOutput'
import UserInput from './Components/User/UserInput';
import UserOutput from './Components/User/UserOutput';

function App() {
  return (
    <div className="App">
      <UserInput></UserInput>
      <UserOutput>Este é o primeiro parágrafo</UserOutput>
      <UserOutput>Este é o segundo parágrafo</UserOutput>
    </div>
  );
}

export default App;
