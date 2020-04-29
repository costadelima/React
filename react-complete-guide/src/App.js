//Para functional components importar o Component não é mais necessário
import { Component } from 'react';
/**
 * *******HOOKS*******
 * Hooks são funções que o React disponibiliza para serem usadas no projeto.
 * 1 - useState: hook que permite utilizar state em functional components
 */
import React, { useState } from 'react';
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
   * 2 - função que altera o state (objeto usado para setar/guardar alguma informacao do componente).
   * 3 - funções que alteram o estado do componente também podem ser passadas como parâmetros dos componentes
   */
  switchNameHandler = (newName) => {
    //console.log("foi clicado");
    //NAAAOO FAZER ISSSO: this.state.persons[0].name = 'Flavio';
    if(this.state.counter == 0){
      this.setState({
        persons: [
          { name: newName, age: 28},
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

  nameChangeeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Luiz', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ],
      counter: 0
    });
  };


  render(){
    //pode-se adicionar in line styles em componentes
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };   

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        {/* onClick é chamado para executar uma função feita. Essa função pode alterar algo no backend,
        pode alterar um componente na tela ou pode alterar um elemento de estado (que por ventura irá
        alterar um componente) */}
        <button 
          style={style} 
          onClick={() => this.switchNameHandler('Luiz Flavio Costa de Lima')}>Switch Name</button>
        {/* se possível use sempre bind em vez de uma função  */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Luiz Flavio Costa de Lima')}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.nameChangeeHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;


/**
 * **************************************************
 * *****************HOOKS EXEMPLE********************
 */
// const App = () => {
//   /**
//    *  useState: retorna sempre um array com dois elementos.
//    *      --> primeiro elemento: current state
//    *      --> segundo elemento : função que permmite atualizar o current state 
//    *   obs: useState não faz merge dos estados, mas sim copia o novo estado
//    *   para o current state. Dessa forma, é necessário fazer todos os objetos
//    *   que estão no current state no novo estado para não se perder informação.
//    */
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Luiz', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     counter: 0
//   });

//   const switchNameHandler = () => {
//     //console.log("foi clicado");
//     //NAAAOO FAZER ISSSO: this.state.persons[0].name = 'Flavio';
//     if (personsState.counter == 0) {
//       setPersonsState({
//         persons: [
//           { name: 'Luiz Flavio Costa de Lima', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'Stephanie', age: 27 }
//         ],
//         counter: 1
//       });
//     } else {
//       setPersonsState({
//         persons: [
//           { name: 'Luiz', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'Stephanie', age: 26 }
//         ],
//         counter: 0
//       });
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }
// export default App;