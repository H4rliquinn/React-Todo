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

    render(){
        return(
            <form>
                <input type="text" placeholder="Add item" id="todoItem" name="input" onChange={this.handleChange}/>
                <button type="button" onClick={(e)=> this.props.todos(e, this.state.input)}>Add</button>
                <button>Clear</button>
            </form>
        );
    }
}

export default Todoform;

