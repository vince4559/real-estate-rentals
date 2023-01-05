import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav'

const SharedComponent = () => {
  return (
 <>
    <Nav />
    <Outlet />
 </>
  )
}

export default SharedComponent
