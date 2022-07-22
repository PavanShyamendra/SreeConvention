import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navBar'
import BckImg from '../assets/icons/bgimage.JPG'
import ContactsPage from './contacts'
import ExplorePage from './explore'

const HomeScreen = () => {
  return (

     <div>
        <div className='bg-scroll'  style={{background: `url(${BckImg})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            width: '100vw',
                                            height: '100vh'}}>
          <div className='flex justify-center'>
            <header className='font-sans text-8xl my-14 p-8 text-other'>Sree Convention</header>
          </div>
          <div className='flex justify-center'>
            <Navbar/>
          </div>
        </div>
        <ExplorePage/>
        <ContactsPage/>
     </div>
    
  )
}

export default HomeScreen