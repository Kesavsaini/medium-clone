import React from 'react'
import LeftAuth from './Components/LeftAuth'
import RightAuth from './Components/RightAuth'

const AuthPage = ({isSignUp}) => {
  return (
    <div className='w-screen h-screen flex flex-col sm:flex-row'>
      <LeftAuth isSignUp={isSignUp}/>
      <RightAuth/>
    </div>
  )
}

export default AuthPage