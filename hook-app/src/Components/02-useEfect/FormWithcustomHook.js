import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import "./effects.css"


// ejecuta un efecto cuando algo afecta nuestros componentes
export const FormWithCustomHook = () => {
    
    const  [formValues, handleInputChange] = useForm({
        name:"",
        email:"",
        password:""
    });
    const {name, email,password}=formValues;
    
    useEffect(()=>{
        console.log("email cambio");
    },[]);

    const hanldeSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <h1>FormWhit custom hook</h1>   
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
                value={email}
                onChange={ handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                type="password" 
                name="password" 
                className="form-control"
                placeholder="**"
                autoComplete="off"
                value={password}
                onChange={ handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary"> Guardar</button>
        </form>
    )
}
