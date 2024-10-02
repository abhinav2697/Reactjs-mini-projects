import { Outlet } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'

const RouteLayout = () => {
  return (
    <>
<NavBar/>
    <main>  
      <Outlet/>
      </main>
    </>
  )
}

export default RouteLayout