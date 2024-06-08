import React from 'react'

const Input = ({lable,placeholder,onChange,className}) => {
  return (
    <div className={`flex flex-col gap-2`}>
       <div className='font-semibold'>{lable}</div>
       <input type="text" placeholder={placeholder} className={`outline-none border rounded-md w-64 h-10 p-4 ${className}`} onChange={onChange}/>
    </div>
  )
}

export default Input