import React from 'react'
import {  Outlet } from 'react-router-dom'
import NavScrollExample from './sources/nav'

const Root = () => {
    return (
        <div className='b'>
            <NavScrollExample/>
            
            <Outlet />

        </div>
    )
}

export default Root