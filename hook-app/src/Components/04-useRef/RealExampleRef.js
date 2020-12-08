import React, { useState } from 'react'
import "../02-useEfect/effects.css"
import { MultipleCustomHooks } from '../02-useEfect/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setshow] = useState(false)

    return (
        <div>
            <h1>real example ref</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button
                className="btn btn-primary mt-5"
                onClick={()=>setshow(!show)}
            >
                Show/Hide
            </button>
        </div>
    )
}
