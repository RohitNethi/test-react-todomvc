//This Component displays count of incomplete items on the list

import React from 'react';

const Counter = (props)=>{
    let length = props.incomplete.length;
    return(
        <div className="counter">
            <strong>{length}</strong> {length===1? 'item':'items'} left
        </div>
    );
}

export default Counter;