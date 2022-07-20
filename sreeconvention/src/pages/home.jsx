import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navBar'
import Bckgd from '../assets/icons/bgimage.jpeg'

const HomeScreen = () => {
  return (

     <div className='bg-scroll'  style={{background: `url(${Bckgd})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100vw',
                                        height: '100vh'}}>
      <div className='flex justify-center'>
        <header className='font-sans text-8xl my-14 p-8 text-light'>Sree Convention</header>
      </div>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
      <div className='flex justify-end p-4'>
        <div className='w-25 bg-other ring-2 ring-other p-2 rounded-lg text-xl'>
          <button className='text-white'>Admin</button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen