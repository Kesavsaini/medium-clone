import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DATA_URL } from '../config'

const useBlog = ({blogId}) => {
    const [blog,setBlog]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const getBlog=async()=>{
        const blogsData=await axios.get(`${DATA_URL}/blog/${blogId}`);
        setBlog(blogsData.data);
        setIsLoading(false);
    }
    useEffect(()=>{
        getBlog();
    },[])
     return {
        isLoading,
        blog
     }
}

export default useBlog