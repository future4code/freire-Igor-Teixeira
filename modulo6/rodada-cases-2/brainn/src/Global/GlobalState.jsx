import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {
    const [contest,setContest] = useState([])
    const[loader,setLoader] = useState(false)
    
    return (
        <div>
        <GlobalStateContext.Provider value={{contest,setContest,loader,setLoader}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
