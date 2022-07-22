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
          setDate(res.data)
        })
    }
    fetchBooks()
  },[])

   
    const allDates = new Set()
    for(let i = 0;i<date.length;i++){
      allDates.add(date.at(i).booked);
    }
  
    let multi = []
    console.log('multi')
     const [value, setValue] = useState([]);

    const onChange = useCallback(
      (val) => {
        setValue(val)
      },
      [setValue],
    );
    
    const isHighlight = useCallback((dat) => {
       if (value.includes(dat)) {
        return true;
      }
      if(allDates.has(dat.toDateString()))return true;
    }, []);
    

    return (
      <div className='bg-main flex items-start justify-center min-h-screen ' >
        <Calendar isHighlight={isHighlight} isMultiSelector value={value} onChange={onChange}  size={500} fontSize = {30} className = 'p-4 mt-20' />
      </div>
    )
}

export default CalendarPage