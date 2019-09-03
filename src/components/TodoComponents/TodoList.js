import React from 'react';

const TodoList= (props) => {
    return (
        props.todos.map(item=>{
            return(
                <h1 key={item.id}>{item.task}</h1> 
            ) 
        })   
    )
}
 
export default TodoList