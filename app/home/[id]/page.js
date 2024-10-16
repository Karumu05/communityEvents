"use client";
import { fetchEventsById } from "@/app/lib/data";
import Image from "next/image";
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
    <>
      <div class="absolute top-0 w-3/4 h-1/4  "></div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full pr-6 ">
        <div className="bg-gradient-to-r from-red-400 col-span-1 flex flex-col justify-center pl-6 ">
          <h1 className="text-7xl font-bold uppercase ">{eventData.title}</h1>
          <p className="text-3xl font-semibold pl-2 italics">
            {eventData.createdBy}
          </p>
        </div>

        <div className="row-span-2 p-6">
        <Image src={eventData.image} height={500} width={500} className="w-full h-full"/>
        </div>

        <div className="bg-gray-200 mx-6 mt-6 rounded-lg flex flex-col   text-4xl ">
          <p className="shadow-lg p-2">Infomation:</p>
          <div className="p-6 gap-4 justify-center">
            <p>Date: {formattedDate}</p>
            <p>Location: {eventData.location}</p>
            <p>Remaining Tickets: {eventData.ticketAmount}</p>
          </div>
        </div>

        <div className="bg-gray-200 mx-6 mb-6 rounded-lg flex flex-col text-3xl ">
          <p className="shadow-lg p-2">Description:</p>
          <p className="p-6">{eventData.description}</p>
        </div>

        <div className="bg-gray-200 m-6 rounded-lg">
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
    </>
  );
}
