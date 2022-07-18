import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './check.css';

const CalendarPage = () => {

    const [date, setDate] = useState(new Date())
  return (
    <div className="container items-center">
        <Calendar onChange={setDate} value={date}/>
    </div>
  )
}

export default CalendarPage