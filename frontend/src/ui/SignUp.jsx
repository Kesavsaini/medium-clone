import React, { useReducer } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'
import { DATA_URL } from '../config'
import { useNavigate } from 'react-router-dom'
const intitalUser={
    name:'',
    email:'',
    password:''
}

const userReducer=(state,action)=>{
   switch(action.type){
      case 'SET_NAME':
        return{
           ...state,
            name:action.payload
        }
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
      default:
        return state;
   }
}

const SignUp = () => {
    const navigate=useNavigate();

    const [user,dispatch] = useReducer(userReducer,intitalUser);
    
    
    const signup=async()=>{
        try{
            const userData=await axios.post(`${DATA_URL}/user/signup`,{
                ...user
            })

           if(userData.data.name){
              navigate('/signin')
           }else{
            alert("Invalid Input")
           }
        }catch(e){
            alert("Invalid Input")
            console.log(e);
        }
    }
  return (
    <div className='flex flex-col gap-4 border p-8 rounded-md'>
       <Input lable={"Name"} placeholder={'Enter Your Name'} onChange={e=>dispatch({type:"SET_NAME",payload:e.target.value})}/>
       <Input lable={"Email"} placeholder={'Enter Your Email'} onChange={e=>dispatch({type:"SET_EMAIL",payload:e.target.value})}/>
       <Input lable={"Password"} placeholder={'Enter Your Password'} onChange={e=>dispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
       <Button title={"Sign Up"} onClick={signup}/>
    </div>
  )
}

export default SignUp