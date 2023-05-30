import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
			method: "GET",
			url: `https://jsearch.p.rapidapi.com/${endpoint}`,
			headers: {
				"X-RapidAPI-Key": "c66f58caf3mshe5bb3da6bc0a7fdp123e79jsnc2377fe17f01",
				"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
			},
			params: { ...query },
		}

    const fetchData = async () => {
        setLoading(true)

        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setLoading(false)
        }catch(error){
            setError(error)
            alert("There was an error fetching data")
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setLoading(true)
        fetchData()
    }

    return { data, loading, error, refetch}
}

export default useFetch