import React, { Component } from 'react';

export default class NewTodo extends Component{
    constructor(props){
        super(props);
        this.state={
            input: ''
        }
    }

    render(){
        return(
          <div className="newtodoform">
              <form onSubmit={(e)=>this.props.handleSubmit(e)}>

                  <input type="text"
                  onChange ={(e)=> this.props.handleChange(e)}
                  value = {this.props.input} />
                  <button type="submit">Add</button>

              </form>
          </div>
        );
    }
}