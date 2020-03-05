import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


//stateful components or state smart
const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Luiz', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // alert('Was clicked!!');
    // DON'T DO THIS: this.state.persons[0].name = 'Luiz'; (do not mutate state directly) 
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Luiz', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App" >
      <h1>hi, i'm a a react app</h1>
      <p>This is really working!</p>
      {/* <button onClick={() => switchNameHandler('Luiz Flávio')}>Switch name</button> */}
      <button 
        style={style}
        onClick={switchNameHandler.bind(this, 'Luiz Flávio')}
      >Switch name</button>
      <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Luiz')}
        changed={nameChangeHandler}>My Hobbies: Racing!</Person>
      <Person 
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default App;


