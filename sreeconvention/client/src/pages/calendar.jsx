import React from 'react'
import { useCallback, useState, useEffect } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import { Link } from 'react-router-dom'

import axios from 'axios'



const CalendarPage = () => {
  const [date, setDate] = useState([])

  useEffect(() => {
    async function fetchBooks() {
      const result = await axios.get(
        'http://localhost:5000/dates')
        .then((res)=>{
          //console.log(res)
          setDate(res.data)
        })
      // const fin = await result.json();
      //setDate(res.data)
    }
    fetchBooks()
  },[])

    console.log(date.at(0).booked)
    const allDates = new Set(["Sat Jul 16 2022"])
    const isHighlight = useCallback((dat) => {
      console.log(dat)
      if (allDates.has(dat.toDateString())) {
        return true;
      }
    }, []);

    return (
      <div className='bg-main flex items-start justify-center min-h-screen ' >
        <Calendar isHighlight={isHighlight} size={500} fontSize = {30} className = 'p-4 mt-20' />
      </div>
    )
}

export default CalendarPage