"use client"
import { useState } from "react";
import { fetchEvents } from "../lib/data";

export default function Page() {
  const [eventData, setEventData] = useState([]);

  fetchEvents().then((response) => {
    setEventData(response);
  });

  
  return (
    <div>
      <p>Home page</p>
      {eventData.map((event) => {
       return <p>{event.id}</p>
        
      })}
    </div>
  );
}
