import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="todolist">
                {this.props.todos.map((todo,index)=>{
                    return(
                            <TodoListItem
                            key={index}
                            todo={todo}
                            />
                    );
                })}
            </div>
        );
    }
}