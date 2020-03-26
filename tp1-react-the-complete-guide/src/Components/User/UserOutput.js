import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.children}</p>
        </div>
    );
};

export default UserOutput;