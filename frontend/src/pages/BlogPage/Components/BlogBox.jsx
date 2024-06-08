import React from 'react'

const BlogBox = ({title,content}) => {
  return (
    <div className='flex flex-col gap-4 sm:w-3/4'>
        <div className='text-4xl font-bold'>{title}</div>
        <div className='font-light text-gray-500'>Posted on 5 Aug 2024</div>
         <div>{content}</div>
    </div>
  )
}

export default BlogBox