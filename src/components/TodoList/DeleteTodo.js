//Deletes a TodoListItem from TodoList

import React from 'react';

const DeleteTodo = (props)=>{

    return(
            <span
                //Passing click event 'e' to stop propagation to underlying li element
                onClick={(e)=>props.handleClick(e,props.todo.id)} >
                <i className="ion-trash-b" />
            </span>
    );
}

export default DeleteTodo;