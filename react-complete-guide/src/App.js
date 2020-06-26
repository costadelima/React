//Para functional components importar o Component não é mais necessário
import { Component } from 'react';
/**
 * *******HOOKS*******
 * Hooks são funções que o React disponibiliza para serem usadas no projeto.
 * 1 - useState: hook que permite utilizar state em functional components
 */
import React from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  /**
   *  1 - state só pode ser usado em componentes que extends Component.
   *  2 - state é usado para alterar dinamincamente o componente.
   *  3 - é o estado que o atributo irá permanecer na chamada do componente.
   */
  state = {
    persons: [
      { id: 'p1', name: 'Luiz', age: 28 },
      { id: 'p2', name: 'Manu', age: 29 },
      { id: 'p3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
      // === usado pois p.id e id sao do mesmo tipo e nao precisam  ser convertidos ( o que faz o == ) para tipos primitivos antes de fazer a comparacao
    });

    //NAO FAZER ISSO
    // const person = this.state.persons[personIndex] AQUI 'E PASSADO SOMENTE O PONTEIRO
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();// boa pratica colocar o slice para copiar o array e nao passar somente o ponteiro
    const persons = [...this.state.persons]; //jeito JavaScript ES6
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    //pode-se adicionar in line styles em componentes
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      // manter o co'digo principal o mais limpo possi'vel
      persons = (
        <div>
          {/* a funcao dentro de map e' executada para cada elemento do array associado ao map */}
          {
            //o mep e' um loop que percorre um array, assim cada vez q o 
            //componente ira' renderizar, deve-se ter uma key u'nica. Assim, somente o componente sera' renderizado.
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
    }

    let intro = (
      <div>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
      </div>
    );

    return (
      <div className="App">
        {intro}
        {/* onClick é chamado para executar uma função feita. Essa função pode alterar algo no backend,
        pode alterar um componente na tela ou pode alterar um elemento de estado (que por ventura irá
        alterar um componente) */}
        <button
          style={style}
          // onClick={() => this.switchNameHandler('Luiz Flavio Costa de Lima')}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>{/* se possível use sempre bind em vez de uma função  */}
        {persons}
      </div>
    );
  }
}

export default App;


/**
 * **************************************************
 * *****************HOOKS EXEMPLE********************
 */
/**
 * *******HOOKS*******
 * Hooks são funções que o React disponibiliza para serem usadas no projeto.
 * 1 - useState: hook que permite utilizar state em functional components
 */
// Para functional components importar o Component não é mais necessário
//  import { Component } from 'react';
//  import React, { useState } from 'react';
//  import './App.css';
//  import Person from './Person/Person';
//  const App = () => {
//    /**
//     *  useState: retorna sempre um array com dois elementos.
//     *      --> primeiro elemento: current state
//     *      --> segundo elemento : função que permmite atualizar o current state 
//     *   obs: useState não faz merge dos estados, mas sim copia o novo estado
//     *   para o current state. Dessa forma, é necessário fazer todos os objetos
//     *   que estão no current state no novo estado para não se perder informação.
//     */
//    const [ personsState, setPersonsState ] = useState({
//      persons: [
//        { name: 'Luiz', age: 28 },
//        { name: 'Manu', age: 29 },
//        { name: 'Stephanie', age: 26 }
//      ],
//      counter: 0
//    });
//    const switchNameHandler = () => {
//      //console.log("foi clicado");
//      //NAAAOO FAZER ISSSO: this.state.persons[0].name = 'Flavio';
//      if (personsState.counter == 0) {
//        setPersonsState({
//          persons: [
//            { name: 'Luiz Flavio Costa de Lima', age: 28 },
//            { name: 'Manu', age: 29 },
//            { name: 'Stephanie', age: 27 }
//          ],
//          counter: 1
//        });
//      } else {
//        setPersonsState({
//          persons: [
//            { name: 'Luiz', age: 28 },
//            { name: 'Manu', age: 29 },
//            { name: 'Stephanie', age: 26 }
//          ],
//          counter: 0
//        });
//      }
//    };
//    return (
//      <div className="App">
//        <h1>Hi, I'm a react app</h1>
//        <p>This is really working!</p>
//        <button onClick={switchNameHandler}>Switch Name</button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//      </div>
//    );
//  }
//  export default App;