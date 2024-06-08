import React, { useReducer, useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import axios from 'axios'
import { DATA_URL } from '../../config'

const initBlog={
  title:'',
  content:''
}

const blogReducer=(state,action)=>{
   switch(action.type){
     case 'SET_TITLE':
       return{
         ...state,
         title:action.payload
       }
     case 'SET_CONTENT':
       return{
         ...state,
         content:action.payload
       }
   }
}

const CreateBlogPage = () => {
   const [blog,dispatch]=useReducer(blogReducer,initBlog);
   const uploadBlog=async()=>{
      const token=localStorage.getItem('token');
      const blogData=await axios.post(`${DATA_URL}/blog/`,{
         ...blog
      },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
     alert(blogData.data);
     console.log(blogData.data);

   }

  return (
    <div className='w-full p-4 h-full flex flex-col gap-4'>
      <Input placeholder={"Tittle"} className={'w-full'} onChange={e=>dispatch({type:"SET_TITLE",payload:e.target.value})}/>
      <textarea name="" id="" cols={200} rows={20} placeholder='Add blog' className='border w-full h-full p-4' onChange={e=>dispatch({type:"SET_CONTENT",payload:e.target.value})}/>
       <div className='w-48'>
       <Button title={"Publish"} onClick={uploadBlog}/>
       </div>
    </div>
  )
}

export default CreateBlogPage