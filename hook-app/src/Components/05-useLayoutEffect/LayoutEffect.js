import React, { useLayoutEffect, useRef, useState } from 'react'
import { UseCouter } from '../../hooks/UseCouter'
import { useFetch } from '../../hooks/useFetch'
import "./layout.css"


export const LayoutEffect = () => {
    const {state,increment, decrement,reset,}=UseCouter(1);
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = !!data && data[0];
    const PTag = useRef();
    const [boxSize, setboxSize] = useState({})
    
    useLayoutEffect(() => {
       setboxSize(PTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>Layout Effect </h1>
            <hr/>
            <blockquote className="blockquote text-right">
            <p 
                ref={PTag}
                className="mb-0">{quote} </p>
            
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button className="btn btn-primary" onClick={()=>increment(1)}>
                next quote
            </button>
            
            
        </div>
    )
}
