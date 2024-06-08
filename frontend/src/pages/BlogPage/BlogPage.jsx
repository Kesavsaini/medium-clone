import React from 'react'
import BlogBox from './Components/BlogBox'
import AuthorBox from './Components/AuthorBox'
import useBlog from '../../hooks/useBlog'
import { useLocation } from 'react-router-dom'

const BlogPage = () => {
  const path=useLocation();
  const blogId=path.pathname.split('/')[2];
  const {isLoading,blog}=useBlog({blogId});
  
  if(isLoading){
    return <div>
      ...Loading
    </div>
  }
  return (
    <div className='w-screen p-4 flex flex-col gap-4 sm:flex-row'>
       <BlogBox title={blog.title} content={blog.content} />
       <AuthorBox author={blog.author.name}/>
    </div>
  )
}

export default BlogPage