import React from 'react'
import { UseCouter } from '../../hooks/UseCouter'
import { useFetch } from '../../hooks/useFetch'
import "../02-useEfect/effects.css"

export const MultipleCustomHooks = () => {
    const {state,increment, decrement,reset,}=UseCouter(1);
   const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
   const {author, quote} = !!data && data[0];

    
    return (
        <div>
            <h1>Braking bad quotes </h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                        loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote} </p>
                        <footer className="blockquote-footer">{author} </footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary" onClick={()=>increment(1)}>
                next quote
            </button>
            
            
        </div>
    )
}
