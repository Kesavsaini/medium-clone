import React from 'react'

const Button = ({title,onClick}) => {
  return (
    <button className='bg-black text-white p-3 rounded-md font-semibold' onClick={onClick}>{title}</button>
  )
}

export default Button