import React from 'react'
import Appbar from './ui/Appbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
     <Appbar/>
      <Outlet/>
    </>
  )
}

export default MainLayout