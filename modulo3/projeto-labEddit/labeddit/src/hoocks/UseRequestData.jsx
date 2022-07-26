import React,{useState,useEffect} from "react"
import axios from "axios"


export const useResquestData = () => {

    const [data, setData] = useState([])
    const [err ,setErr] =useState("")

    const getData= (url) => {
        axios.get(url).then((res) => {
            setData(res.data)
            console.log(res.data)
        }).catch((err) => {
            alert(err.response.data.message)
            setErr(err.response.data.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return {data,setData,err}
} 