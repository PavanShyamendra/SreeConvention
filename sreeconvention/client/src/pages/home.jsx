import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navBar'
import BckImg from '../assets/icons/bgimage.JPG'
import ContactsPage from './contacts'
import ExplorePage from './explore'
import CalendarPage from "./calendar";


const HomeScreen = () => {
  return (

     <div>
        <div className='bg-scroll'  style={{background: `url(${BckImg})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            width: '100vw',
                                            height: '100vh'}}>
          <div className='flex flex-col-reverse justify-center'>
            <header className='font-serif text-9xl text-light'>We are</header>
            <header className='font-serif text-9xl absolute bottom-0 right-0 text-light flex-grow '>Sree Convention.</header>
          </div>
        </div>
        <ExplorePage/>
        <CalendarPage/>
        <ContactsPage/>
     </div>
    
  )
}

export default HomeScreen