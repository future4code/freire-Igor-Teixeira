import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {

    
    const[comment,setComment]  = useState([])
    const[loader,setLoader] = useState(false)
    
    

    return (
        <div>
        <GlobalStateContext.Provider value={{comment,setComment,loader,setLoader}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
