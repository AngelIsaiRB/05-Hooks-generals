import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { UseCouter } from '../../hooks/UseCouter'
import "../02-useEfect/effects.css"


export const MemoHook = () => {

    const {state:counter, increment}=UseCouter(2000);
    const [show, setShow] = useState(true);

    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo hooks</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <hr/>

            <p> { memoProcesoPesado}</p>
            
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
