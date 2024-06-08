import React, { useState } from 'react'
import SignUp from '../../../ui/SignUp'
import SignIn from '../../../ui/SignIn'
import { useNavigate } from 'react-router-dom'

const LeftAuth = ({isSignUp}) => {

    const navigate=useNavigate();
    const navigateit=()=>{
        if(isSignUp){
            navigate('/signin')
        }else{
            navigate('/signup')
        }
    }
    
  return (
    <div className='sm:w-2/4 h-screen flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center gap-2'>
        <div className='font-bold text-4xl'>{isSignUp?"Create an account":"Login your account"}</div>
        <div className='text-gray-400'>{isSignUp?"Already have an account?":"Does not have an account?"} <span className='underline cursor-pointer' onClick={navigateit}>{isSignUp? "Login" : "SignUp"}</span></div>
        </div>
        {isSignUp?<SignUp/>:<SignIn/>}
    </div>
  )
}

export default LeftAuth