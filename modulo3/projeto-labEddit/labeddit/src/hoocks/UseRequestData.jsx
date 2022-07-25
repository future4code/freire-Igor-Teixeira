export const useResquestData = () => {

    const [data, setData] = useState([])

    const getData= (url) => {
        axios.get(url).then((res) => {
            setData(res.data)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    return {data,setData,error}
} 