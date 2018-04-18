import React, { Component } from 'react';
import DeleteTodo from './DeleteTodo';

export default class TodoListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <li onClick={()=>this.props.handleListItemClick(this.props.todo)}
                    className={(this.props.todo.completed==true)?'completed' : ''}
                >
                    <div>
                        <span className="todolistitem">
                            {this.props.todo.value} </span>
                        <span className="deletebutton">
                            <DeleteTodo
                            handleClick={(e,id)=>this.props.handleClick(e,id)}
                            todo={this.props.todo}
                            />
                        </span>
                    </div>
                </li>

            </div>
        )
    }
}

