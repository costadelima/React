import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
    };

    return (
        <div className="UserInput" >
            <input
                type="text"
                style={inputStyle}
                onChange={props.change}
                value={props.username}
            />
        </div>

    );
};

export default UserInput;