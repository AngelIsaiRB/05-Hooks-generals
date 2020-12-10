import React, { useEffect, useReducer } from 'react';
import "./styles.css";
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init=()=>{
    return JSON.parse( localStorage.getItem("todos")) || [];
};

// en la funcion init lo que sea que retirne es el inicial state
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));       
    }, [todos])

    const handleDelete=(todoID)=>{
        const action={
            type:"delete",
            payload: todoID
        };
        dispatch(action);
    }

    const handleToggle = (todoId)=>{
        dispatch(
            {
                type:"toggle",
                payload:todoId
            }
        );
    }

    const handleAddTodo=(newTodo)=>{
        
        dispatch({
            type:"add",
            payload:newTodo
        });
    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                   <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
