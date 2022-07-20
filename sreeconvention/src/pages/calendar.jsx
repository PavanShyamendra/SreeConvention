import React from 'react'
import { useCallback, useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';


const CalendarPage = () => {

    const [value, setValue] = useState(new Date());

    const onChange = useCallback(
      (val) => {
        setValue(val);
      },
      [setValue],
    );
    const allDates = new Set(["Tue Jun 21 2022","Mon Jun 27 2022","Fri Jul 01 2022"]);

    const isHighlight = useCallback((date) => {
      // highlight any data that is divisible by 5
      console.log(date.toDateString())
      if (allDates.has(date.toDateString())) {
        return true;
      }
    }, []);

    return (
      <div className='bg-main flex items-start justify-center min-h-screen ' >
        <Calendar isHighlight={isHighlight} size={500} fontSize = {30} value={value} onChange={onChange} className = 'p-4 mt-20' />
      </div>
    )
}

export default CalendarPage