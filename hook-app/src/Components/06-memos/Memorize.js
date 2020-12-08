import React, { useState } from 'react'
import { UseCouter } from '../../hooks/UseCouter'
import "../02-useEfect/effects.css"
import { Small } from './Small';

export const Memorize = () => {

    const {state:counter, increment}=UseCouter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>

            <button
            className="btn btn-primary"
            onClick={()=>increment(1)}
            >
                +1
            </button>

            <button
             className="btn btn-outline-primary ml-3"
             onClick={
                 ()=>setShow(!show)
             }
            >
            show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
