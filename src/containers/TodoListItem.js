import React, { Component } from 'react';

export default class TodoListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <span>{this.props.todo.value} </span>
                <button>completed</button>
            </div>
        )
    }
}

