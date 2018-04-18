import React, {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from '../containers/TodoList';
import NewTodo from '../containers/NewTodo';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            input: '',
            todos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            input: e.target.value
        });
    }

    handleListItemClick(todo){
        const todos = this.state.todos.slice();
        todo.completed = !todo.completed;
        this.setState({
            todos
        });
    }

    handleClick(e,id) {
        const todos = this.state.todos.filter((todo)=>{
            if(todo.id!==id){
                return todo;
            }
        });

        this.setState({
            todos
        });
        e.stopPropagation();
    }

    handleKeyPress(e){
        e.preventDefault();
        if(this.state.input.trim()!=='') {
            const newTodo = {
                id: Date.now(),
                value: this.state.input,
                completed: false
            }

            //Slicing the original Array for Immutability
            const todos = this.state.todos.slice();
            todos.push(newTodo);
            this.setState({
                todos,
                input: ''
            });
        }
    }


        render(){
            return(
                <div className="app-component">
                    <TodoHeader />
                    <NewTodo
                    input = {this.state.input}
                    handleChange = {this.handleChange}
                    handleKeyPress = {this.handleKeyPress}
                    />
                    <TodoList
                        todos= {this.state.todos}
                        handleClick= {this.handleClick}
                        handleListItemClick ={this.handleListItemClick}
                    />
                </div>
            );
        }
}

