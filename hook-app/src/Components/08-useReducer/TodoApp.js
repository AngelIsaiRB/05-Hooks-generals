import React, { useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import "./styles.css";
import { todoReducer } from './todoReducer';

const initialState =[
    {
        id:new Date().getTime(),
        desc: "aprende react",
        done: false
    }
]
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
  const  [{description}, handleInputChange, reset]=  useForm({
        description:"",

    })

    const handleSubmit =(e)=>{

        if(description.trim().length <= 1) return;
        e.preventDefault();
        const newTodo={
            id:new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type:"add",
            payload:newTodo
        };
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                <ul className="list-group list-group-flush">
                {
                    todos.map((todo,i)=>(
                        <li
                        key={todo.id}
                        className="list-group-item"
                        >
                         <p className="text-center"> {i+1}. {todo.desc}</p>
                         <button className="btn btn-danger">
                             Borrar
                         </button>
                        </li>
                    ))
                }
            </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="aprender..."
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={description}                  
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}