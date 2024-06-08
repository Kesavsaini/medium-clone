import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from '../../../ui/Skeleton'

const RightAuth = () => {
    const[quote,setQuote]=useState({
        content:'',
        author:''
    })
    useEffect(()=>{
      const getQuotes=async()=>{
      const quoteData=await axios.get('https://api.quotable.io/quotes/random');
        setQuote({content: quoteData.data[0].content,author:quoteData.data[0].author});
        console.log(quoteData);
      }
      getQuotes();
    },[])
  return (
    <div className='sm:w-2/4 sm:h-screen bg-slate-100 flex flex-col items-center justify-center p-8 sm:p-0'>
       {quote.content? <div className='flex flex-col w-11/12 gap-4'>
        <div className='font-bold text-3xl'>{'❝'}<span>{quote.content}</span>{'❞'}</div>
         <div className='font-semibold text-xl'>{quote.author}</div>
         </div>: <Skeleton/>}
    </div>
  )
}

export default RightAuth