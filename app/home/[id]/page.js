"use client";
import { fetchEventsById } from "@/app/lib/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathId = usePathname().match(/\d+/g).toString();
  const [eventData, setEventData] = useState({});
  const formattedDate = eventData.date?.match(/^[^T]*/);

  useEffect(() => {
    fetchEventsById(pathId).then((result) => {
      setEventData(result);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 h-full">
      <div className="flex  h-full flex-col sm:flex-row">
        <div className="flex-1 mr-4">
           
            <div className="bg-red-400">
          <h1 className="text-3xl font-bold uppercase ">{eventData.title}</h1>
          <p className=" ">{eventData.createdBy}</p>
            </div>

          <div className="flex flex-col h-full justify-evenly">
            <div className="mt-14 bg-gray-200 text-4xl rounded-xl h-full flex flex-col justify-center items-center gap-6 ">
              <p>Date: {formattedDate}</p>
              <p>Location: {eventData.location}</p>
              <p>Remaining Tickets: {eventData.ticketAmount}</p>
            </div>
            <p className="text-2xl text-center bg-gray-200 mt-4 h-full rounded-xl flex justify-center items-center">
              {eventData.description}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-auto"
          />

          <div className="flex flex-col bg-gray-200 mt-4 rounded-xl h-full justify-evenly items-center">
            <div className="mt-4">
              <p className="text-3xl ">Attendees:</p>
              <ul className="list-disc ml-4">{/* List of attendees here */}</ul>
            </div>

            <div className="mt-4">
              <p className="text-3xl ">Cost: ${eventData.cost}</p>
            </div>

            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy General Admission Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
