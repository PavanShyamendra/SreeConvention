import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="justify-center flex flex-col">
            <NavIcon current = {"Explore"}/>
            <NavIcon current = {"Locate"}/>
            <NavIcon current = {"Contact"}/>
            <NavIcon current = {"Availability"}/>
            <NavIcon current = {"Caterers"}/>
        </div>
    )
}

const NavIcon = ({current}) =>(
    <div className = "text-align-center p-4 " >
       <button className = "text-main w-40 bg-light p-2 ring-2 ring-other rounded-lg text-xl" >{current}</button>
    </div>
)

export default Navbar