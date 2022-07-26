import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {

    const [id,setId] = useState([])
    
    

    return (
        <div>
        <GlobalStateContext.Provider value={{id,setId}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
