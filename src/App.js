import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
const itemList=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoListItems:[]
    } 
  }

  handleAdd=(e,input)=>{
    e.preventDefault();
    const newInput={task:input,id:Date.now(),completed:false}
    this.setState({
      todoListItems:[...this.state.todoListItems,newInput]
    });
    this.setState({input:""})
  }

componentDidMount=()=>{
  this.setState({todoListItems:itemList});
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoListItems}/>
        <TodoForm todos={this.handleAdd} />
      </div>
    );
  }
}

export default App;
