import React, { Component } from 'react';


export default class NewTodo extends Component{
    constructor(props){
        super(props);
        this.state={
            input: ''
        }

    }

    render(){
        const ENTER_KEY = 13;
        return(
          <div className="newtodo">
              <form>

                  <input type="text"
                         onKeyPress={e=>{if(e.charCode===ENTER_KEY||e.keyCode===ENTER_KEY){
                             this.props.handleKeyPress(e);
                         }}}
                         onChange ={(e)=> this.props.handleChange(e)}
                        value = {this.props.input}
                         placeholder="Add new todo"
                         autoFocus
                         required
                  />

              </form>
          </div>
        );
    }
}