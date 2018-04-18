// This Component returns the header at the top of the TodoList

import React from 'react';

const TodoHeader = (props)=>{

    return(
        <div className="todoheader">
            {props.title}
        </div>
    );
}

export default TodoHeader;