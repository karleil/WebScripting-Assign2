import { useEffect, useState } from "react";


const BdayCounter = () => {
    const [timeRem, setTimeRem] = useState(""); // Setting the States to hold the formatted countdown string. [reference, setter] = initial state  
  
    useEffect(() => {
  
      // this declares our target date: December 10, 2024 midnight.
      const targetDate = new Date("December 10, 2024 00:00:00").getTime();
  
      // this is the function that calculates the remaining time and formats it.
      const updateTimer = () => {
        const now = new Date().getTime(); // gets the current time.
        const distance = targetDate - now; // gets the time difference between target date and the current time.
        (updateTimer, 1000); // this sets an interval to update the timer every second (1000ms).
  
        // Calculate remaining days, hours, minutes, and seconds. I referred to this for the time calcs TwT(https://www.youtube.com/watch?v=ZVOGPvo08zM)
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Converts milliseconds to days.
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours.
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes.
        const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Remaining seconds.
  
        // Renders the time calcs and updates the state.
        setTimeRem(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      };
  
  
     
});
  
    return (
      <div className="text-center py-2 md:py-5 bg-neutral-800"> 
        <h1 className="md:text-5xl font-bold text-white md:pt-4">Countdown to my Birthday!!!</h1>
        <p className="md:text-xl md:mt-4 text-cyan-400 md:font-semibold">{timeRem}</p> 
      </div>
    );
  };

  export default BdayCounter