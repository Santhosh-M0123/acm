import React, { useState, useEffect } from "react";

const Timer = ({targetDate}) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
      });
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const difference = targetDate - now;
    
          if (difference <= 0) {
            clearInterval(interval);
            setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
          } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
    
            setTimeRemaining({ days, hours, minutes });
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [targetDate]);
  return (
    <div className="timer_unit">
        <div className="days">
            <h2>{timeRemaining.days}</h2>
            <h4>Days</h4>
        </div>
        <div className="minutes">
            <h2>{timeRemaining.hours}</h2>
            <h4>Hours</h4>
        </div>
        <div className="seconds">
            <h2>{timeRemaining.minutes}</h2>
            <h4>Minutes</h4>
        </div>
    </div>
  )
}

export default Timer