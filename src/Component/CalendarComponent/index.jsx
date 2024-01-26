import "./calendarComponent.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";

function MyCalendar(props) {
  const { SetDate } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    SetDate(newDate);
    // Add any additional logic you need when the date changes
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default MyCalendar;
