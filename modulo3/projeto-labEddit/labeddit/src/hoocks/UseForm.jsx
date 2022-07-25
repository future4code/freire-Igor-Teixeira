import React, { useState } from "react";

export const Useform = (initialState) => {
    const [form , setForm] = useState(initialState)
    const onChange = (event)=>{
        const{name,value} = event.target
        setForm({...form, [name]: value})
    }
    const Clean = () => {
        setForm(initialState)
    }
    return {form , onChange, Clean}
}