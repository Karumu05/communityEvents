"use client";
import { useEffect, useState } from "react";
import { fetchEvents } from "../lib/data";
import EventCard from "../UI/home/eventCard";

export default function Page() {
  const [eventData, setEventData] = useState([]);
  const currentDate = new Date();
  const todayDateFormat = currentDate.toLocaleDateString();

  useEffect(() => {
    fetchEvents().then((response) => {
      setEventData(response);
    });
  }, []);
  return (
    <div>
      <section className="flex flex-row mx-5 mb-5 ">
        <h1 className="font-semibold uppercase text-black text-3xl">
          Upcoming Events
        </h1>
      </section>

      <section className="flex flex-row flex-wrap gap-6">
        {eventData.map((event) => {
          const formattedDate = event.date.match(/^[^T]*/);
          return (
            <EventCard
              image={event.image}
              name={event.title}
              date={formattedDate}
            />
          );
        })}
      </section>
    </div>
  );
}
