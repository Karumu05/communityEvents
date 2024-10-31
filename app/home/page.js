"use client";
import { useEffect, useState } from "react";
import { fetchEvents } from "../lib/data";
import EventCard from "../UI/home/eventCard";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import ButtonPerm from "../UI/home/buttonPerm";

export default function Page() {
  const [eventData, setEventData] = useState([]);
  const [eventUnlock, setEventUnlock] = useState(false);

  function handlePress() {
    setEventUnlock(true);
  }

  useEffect(() => {
    fetchEvents().then((response) => {
      setEventData(response);
    });
  }, []);

  return eventUnlock ? (
    <div>
      <ButtonPerm />
    </div>
  ) : (
    <div className="p-6">
      <section className="flex flex-row mx-5 mb-5 justify-between py-6">
        <h1 className="font-semibold uppercase text-black text-3xl">
          Upcoming Events
        </h1>

        <button type="button" onClick={handlePress} className="bg-red-300 p-2 rounded-xl hover:bg-red-400" >
          Click here to add an event 
        </button>
        
        
        
        
      </section>

      <section className="flex flex-row flex-wrap gap-6">
        {eventData.map((event) => {
          const formattedDate = event.date.match(/^[^T]*/);
          return (
            <Link key={event.title + event.id} href={`home/${event.id}`}>
              <EventCard
                image={event.image}
                name={event.title}
                date={formattedDate}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
}
