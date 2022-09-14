import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {

    
    const[comment,setComment]  = useState([])
    const[loader,setLoader] = useState(false)
    const [page, setPage] = useState(1);
    
    

    return (
        <div>
        <GlobalStateContext.Provider value={{comment,setComment,loader,setLoader,page,setPage}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
