import React from 'react';
import './Person.css';


/**
 * Ao usar class-vased components, utilizar 'this.props'
 */
const person = (props) => {
    // console.log(props.change);
    return (
        <div className="Person">
            <p onClick={props.click}>I'm  a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;