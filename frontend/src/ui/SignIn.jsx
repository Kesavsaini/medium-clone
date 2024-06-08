import React, { useReducer } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'
import { DATA_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const initUser={
  email:"",
  password:""
}

const signInReducer=(state,action)=>{
     switch(action.type){
       case 'SET_EMAIL':
         return{
           ...state,
           email:action.payload
         }
       case 'SET_PASSWORD':
         return{
           ...state,
           password:action.payload
         }
     }
}

const SignIn = () => {
   const navigate=useNavigate();
   const [user,dispatch]=useReducer(signInReducer,initUser);

   const signIn=async()=>{
    try{
      const userData=await axios.post( `${DATA_URL}/user/signin`,{
         ...user
      });

      if(userData.data){
         localStorage.setItem('token',userData.data);
         navigate('/');
      }else{
         console.log(userData.data);
      }

    }catch(e){
      console.log(e);
    }
   }

  return (
    <div className='flex flex-col gap-4 border p-8 rounded-md'>
    <Input lable={"Email"} placeholder={'Enter Your Email'} onChange={e=>dispatch({type:"SET_EMAIL",payload:e.target.value})}/>
    <Input lable={"Password"} placeholder={'Enter Your Password'} onChange={e=>dispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
    <Button title={"Sign In"} onClick={signIn}/>
 </div>
  )
}

export default SignIn