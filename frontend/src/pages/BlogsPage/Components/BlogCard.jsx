import React from 'react'
import Avtar from '../../../ui/Avtar'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({title,content,author,id}) => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/blog/${id}`)
    }
  return (
    <div className='w-full border p-8 flex flex-col gap-2 sm:w-2/3 rounded-lg cursor-pointer' onClick={handleClick}>
        <div className='flex items-center gap-2'>
           <Avtar title={author[0].toUpperCase()}/>
           <div className='font-medium'>{author}</div>
           <div className='text-gray-600 font-light'>• 2 May 2024</div>
        </div>
        <div className='font-bold text-xl'>{title}</div>
        <div className=''>{content}</div>
        <div className='text-gray-600 font-light'>2 mintue(s) read</div>
    </div>
  )
}

export default BlogCard