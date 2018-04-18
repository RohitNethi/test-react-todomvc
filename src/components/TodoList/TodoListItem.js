//Returns TodoListItem as single li element

import React from 'react';
import DeleteTodo from './DeleteTodo';

const TodoListItem = (props)=>{

        return(
                <li onClick={()=>props.handleListItemClick(props.todo)}
                    className={(props.todo.completed===true)?'completed' : ''}>

                    <div>
                        <span className="todolistitem">
                            {props.todo.value}
                        </span>

                        <span className="deletebutton">
                            <DeleteTodo
                            handleClick={(e,id)=>props.handleClick(e,id)}
                            todo={props.todo}
                            />
                        </span>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onChange={(e)=>e.preventDefault()}
                            checked ={props.todo.completed}
                        />
                    </div>
                </li>
        );
    }

    export default TodoListItem;

