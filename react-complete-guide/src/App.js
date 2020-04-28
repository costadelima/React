import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{ 
  /**
   *  1 - state só pode ser usado em componentes que extends Component.
   *  2 - state é usado para alterar dinamincamente o componente.
   *  3 - é o estado que o atributo irá permanecer na chamada do componente.
   */
  state = {
    persons: [
      { name: 'Luiz', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    counter: 0
  }

  /**
   *  1 - a primeira parte do nome da função é opcional, mas tipicamente
   * no final do nome usa-se "Handler" para indicar que não é um método
   * que não está ativamente sendo chamado, mas que está sendo lidado (handler)
   * com outra função, método ou variável.
   */
  switchNameHandler = () => {
    //console.log("foi clicado");
    //NAAAOO FAZER ISSSO: this.state.persons[0].name = 'Flavio';
    if(this.state.counter == 0){
      this.setState({
        persons: [
          { name: 'Luiz Flavio Costa de Lima', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stephanie', age: 27}
        ],
        counter : 1
      });      
    }else{
      this.setState({
        persons: [
          { name: 'Luiz', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stephanie', age: 26}
        ],
        counter: 0
      });
    }
  };


  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        {/* onClick é chamado para executar uma função feita. Essa função pode alterar algo no backend,
        pode alterar um componente na tela ou pode alterar um elemento de estado (que por ventura irá
        alterar um componente) */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
