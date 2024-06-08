import React from 'react'
import Avtar from '../../../ui/Avtar'

const AuthorBox = ({author}) => {
  return (
    <div className='flex flex-col gap-2 border p-4 sm:w-1/4 sm:border-l-8'>
        <div className='font-bold'>Author</div>
        <div className='flex items-center gap-2'>
        <Avtar title={author[0].toUpperCase()}/>
        <div>{author}</div>
        </div>
    </div>
  )
}

export default AuthorBox