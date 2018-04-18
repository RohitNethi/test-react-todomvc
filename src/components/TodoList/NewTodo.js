//Create new todolist item

import React from 'react';

 const NewTodo = (props)=>{

    const ENTER_KEY = 13;

        return(
          <div className="newtodo">
              <form>

                  {/*Checking both keyCode and charCode for browser compatibility*/}
                  <input type="text"
                         onKeyPress={e=>{if(e.charCode===ENTER_KEY||e.keyCode===ENTER_KEY){
                             props.handleKeyPress(e);
                         }}}
                         onChange ={(e)=> props.handleChange(e)}
                         value = {props.input}
                         placeholder="Add new todo"
                         autoFocus
                         required
                  />

              </form>
          </div>
        );
    }

    export default NewTodo;