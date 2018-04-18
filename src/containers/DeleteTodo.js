import React from 'react';

const DeleteTodo = (props)=>{

    return(
            <span
                    onClick={(e)=>props.handleClick(e,props.todo.id)} >
                X
            </span>
    );
}

export default DeleteTodo;