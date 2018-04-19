import React, {Component} from 'react';
import TodoHeader from '../components/TodoList/TodoHeader';
import TodoList from '../components/TodoList/TodoList';
import NewTodo from '../components/TodoList/NewTodo';
import Counter from '../components/TodoList/Counter';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            input: '',
            todos: [],
        }

        //Binding Event handlers to avoid creating them each time the component renders
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //Handles input value change #SingleSOurceOfTruth
    handleChange(e){
        e.preventDefault();
        this.setState({
            input: e.target.value
        });
    }

    //Handles Toggling of TodoItem completed property
    handleListItemClick(todo){
        const todos = this.state.todos.slice();
        todo.completed = !todo.completed;
        this.setState({
            todos
        });
    }

    //Handles Toggling of TodoItem completed property. Redundant here. Fix if time permits.
    handleCheckboxClick(todo,e){
        const todos = this.state.todos.slice();
        todo.completed = !todo.completed;
        this.setState({
            todos
        });
        e.stopPropagation();
    }

    //Handles Deletion of Items from TodoList
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

    //Handles submitting new form on pressing Enter Key and validates input
    handleKeyPress(e){
        e.preventDefault();

        //Trimming the input and checking if it is empty
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


    //Render components
        render(){

        const title='TodoMVC (React)';
            return(
                <div className="app-component">

                    <TodoHeader title={title}/>

                    <NewTodo
                    input = {this.state.input}
                    handleChange = {this.handleChange}
                    handleKeyPress = {this.handleKeyPress}
                    />

                    <TodoList
                        todos= {this.state.todos}
                        handleCheckboxClick = {this.handleCheckboxClick}
                        handleClick= {this.handleClick}
                        handleListItemClick ={this.handleListItemClick}
                    />

                    <Counter
                        //Filtering incomplete elements for counting remaining items
                        incomplete = {this.state.todos.filter((ele)=>{
                            return ele.completed===false;
                        })}
                    />

                </div>
            );
        }
}
