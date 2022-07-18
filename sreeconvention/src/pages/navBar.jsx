import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="fixed top-0 flex flex-row w-screen h-16 flex bg-gray-900 text-cyan-50 p-4 shadow-lg">
            <NavIcon current = {"About"}/>
            <NavIcon current = {"Locate"}/>
            <NavIcon current = {"Contact"}/>
            <NavIcon current = {"Availability"}/>
            <NavIcon current = {"Caterers"}/>
            <NavIcon current = {"Help"}/>
        </div>
    )
}

const NavIcon = ({current}) =>(
    <div className = "navIcon text-align-center px-10" >
       <i>{current}</i>
    </div>
)

export default Navbar