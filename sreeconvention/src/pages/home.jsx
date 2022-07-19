import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navBar'

const HomeScreen = () => {
  return (

    <div className='bg-main min-h-screen'>
      <div className='flex justify-center'>
        <header className='font-sans text-8xl my-14 p-8 text-light'>Sree Convention</header>
      </div>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
    </div>
  )
}

export default HomeScreen