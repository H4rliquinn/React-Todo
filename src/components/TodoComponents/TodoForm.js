import React from 'react';

class Todoform extends React.Component{
    constructor(){
        super();
        this.state={input:""};
    }

    handleChange=(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value})
        // console.log(e.target.value,this.state);
    };

    handleAdd=(e)=>{
        e.preventDefault();
        console.log("hSub",this.state.input);
        this.notit({todoListItems:[
            ...this.state.todoListItems,
            {task:e.target.value,id:Date.now(),completed:false}
        ]})
        this.setState({input:""})
      }

    render(){
        return(
            <form>
                <input type="text" placeholder="Add item" id="todoItem" name="input" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleAdd}>Add</button>
                <button>Clear</button>
            </form>
        );
    }

}

export default Todoform;

