import React, {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from '../containers/TodoList';
import NewTodo from '../containers/NewTodo';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            input: '',
            todos: [
                {
                    value: 'Complete this challenge',
                    done: false
                },
                {
                    value: 'Complete this challenge',
                    done: true
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            value: this.state.input,
            done: false
        }

        //Slicing the original Array for Immutability
        const todos = this.state.todos.slice();
        todos.push(newTodo);
        this.setState({
            todos,
            input: ''
        });
    }


        render(){
            return(
                <div className="app-component">
                    <TodoHeader />
                    <NewTodo
                    input = {this.state.input}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    />
                    <TodoList
                        todos= {this.state.todos}
                    />
                </div>
            );
        }
}

