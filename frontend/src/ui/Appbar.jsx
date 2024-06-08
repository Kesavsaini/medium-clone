import React from 'react'
import Avtar from './Avtar'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Appbar = () => {
    const navigate=useNavigate();
    const openEditor=()=>{
        navigate('blog/create');
    }
  return (
    <div className='w-screen flex items-center justify-between p-6 border-b'>
        <div className='text-3xl font-extrabold'>माध्यम</div>
        <div className='flex gap-8 items-center just'>
        <Button title={"Create new blog"} onClick={openEditor}/>
        <Avtar title={"K"}/>
        </div>
    </div>
  )
}

export default Appbar