import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {

    
    const[comment,setComment]  = useState([])
    
    

    return (
        <div>
        <GlobalStateContext.Provider value={{comment,setComment}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
