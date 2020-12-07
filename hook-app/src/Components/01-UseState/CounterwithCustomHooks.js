import React from 'react'
import { UseCouter } from '../../hooks/UseCouter'
import "./counter.css"


export const CounterwithCustomHooks = () => {

    const {state, increment, decrement, reset } = UseCouter();
    return (
        <div>
            <h1> Counter with  hook: {state}</h1>
            <hr/>
            <button className="btn" onClick={()=>increment(1)}> +1 </button>
            <button className="btn" onClick={()=>decrement(1)}> -1 </button>
            <button className="btn " onClick={reset}> reset </button>
        </div>
    )
}
