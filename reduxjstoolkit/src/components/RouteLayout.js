import { Outlet } from 'react-router-dom'
import React from 'react'

const RouteLayout = () => {
  return (
    <>
    <h1>Navigation</h1>
    <main>  <Outlet/></main>
  
    </>
  )
}

export default RouteLayout