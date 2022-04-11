import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

const useFetch = (url,type,millSeconds) => {
    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState([])
    
    useEffect(()=>{
       
        const fetchData =async()=>{
            
            let respone;
            if(type === 'GET'){
                let responeGet = await axios.get(url)
                respone = responeGet.data
            }else if(type === 'POST'){
                let responePost = await axios.post(url)
                respone = responePost.data
            }else{
                let responeGet = await axios.get(url)
                respone = responeGet.data
            }
            
            setData(respone)
            setIsLoading(false)
        }
        setTimeout(()=>{
            fetchData()
        },millSeconds)
       
   
    },[])

    return [isLoading,data]
   
}

export default useFetch

