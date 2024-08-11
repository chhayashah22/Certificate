import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
    <div className="my-calendar">
      
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
    </>
  );
};

export default MyCalendar;
