//Returns a list of TodoListItems

import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props)=>{
        return(
            <div className="todolist">
                <ul>
                {props.todos.map((todo,index)=>{
                    return(
                            <TodoListItem
                            key={index}
                            todo={todo}
                            handleListItemClick={(todo)=>{props.handleListItemClick(todo)}}
                            handleClick={(e,id)=>props.handleClick(e,id)}
                            />
                    );
                })}
                </ul>
            </div>
        );
}

export default TodoList;