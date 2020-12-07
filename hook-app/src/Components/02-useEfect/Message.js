import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        // console log
        return () => {
            console.log("componentes desmontado")
        }
    }, [])
    return (
        <div>
            <h3>genail</h3>
        </div>
    )
}
