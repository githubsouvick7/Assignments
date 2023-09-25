import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './LandingPage'
import { NextPage } from './NextPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/next' element={<NextPage/>}/>
        </Routes>
    </div>
  )
}
