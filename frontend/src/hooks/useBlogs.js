import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DATA_URL } from '../config'

const useBlogs = () => {
    const [blogs,setBlogs]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const getBlogs=async()=>{
        const blogsData=await axios.get(`${DATA_URL}/blog/bulk`);
        setBlogs(blogsData.data);
        setIsLoading(false);
    }
    useEffect(()=>{
        getBlogs();
    },[])
     return {
        isLoading,
        blogs
     }
}

export default useBlogs