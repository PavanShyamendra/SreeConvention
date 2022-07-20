import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar'; 

const CalendarPage = () => {

    const [date, setDate] = useState(new Date())
  return (
    <div className="bg-main min-h-screen">

      <div className="flex justify-center p-4">
        <Calendar onChange={setDate} value={date} className="justify-center bg-main"/>
      </div>
    </div>
  )
}

export default CalendarPage