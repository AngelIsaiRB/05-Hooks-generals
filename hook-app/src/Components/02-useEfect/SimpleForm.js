import React, { useEffect, useState } from 'react'
import "./effects.css"
import { Message } from './Message';

// ejecuta un efecto cuando algo afecta nuestros componentes
export const SimpleForm = () => {
    
    const  [formState, setFormState] = useState({
        name:"",
        email:""
    });
    const {name, email}=formState;
    useEffect(()=>{
       
    },[]);

    useEffect(()=>{
        // se ejecuta cada quie cambia el state
    },[formState]);
    
    useEffect(()=>{
        // se ejecuta cada quie cambia el email
    },[email]);

    const handleInputChange=({target})=>{
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }


    return (
        <>
            <h1>Simple form use Efect</h1>   
            <hr/>
            <div className="form-group">
                <input 
                type="text" 
                name="name" 
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={ handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                type="text" 
                name="email" 
                className="form-control"
                placeholder="email@ejemplo.com"
                autoComplete="off"
                value={name}
                onChange={ handleInputChange}
                />
            </div>
            {(name === "123") && <Message/> }
        </>
    )
}
