"use client";
import { fetchEventsById, patchEvent } from "@/app/lib/data";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Page() {
  const pathId = usePathname().match(/\d+/g).toString();
  const [eventData, setEventData] = useState({});
  const formattedDate = eventData.date?.match(/^[^T]*/);
  const { user } = useUser();
  const router = useRouter();

  function handleBuyTicket() {
    if (eventData.atendees.includes(user.nickname)) {
      alert("Already in event");
      router.back();
    } else {
      const atendeeData = {
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        createdBy: eventData.createdBy,
        atendees: [...eventData.atendees, user.nickname],
        location: eventData.location,
        ticketAmount: eventData.ticketAmount,
        image: eventData.image,
        cost: eventData.cost,
        id: eventData.id,
      };
      patchEvent(pathId, atendeeData);

      alert("Your going to the event!");
      router.back();
    }
  }

  useEffect(() => {
    fetchEventsById(pathId).then((result) => {
      setEventData(result);
    });
  }, []);

  return (
    <>
      <div className="absolute top-0 w-3/4 h-1/4  "></div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full pr-6 ">
        <div className="bg-gradient-to-r from-red-400 col-span-1 flex flex-col justify-center pl-6 ">
          <h1 className="text-7xl font-bold uppercase ">{eventData.title}</h1>
          <p className="text-3xl font-semibold pl-2 italics">
            {eventData.createdBy}
          </p>
        </div>

        <div className="row-span-2 p-6">
          <Image
            src={eventData.image}
            height={500}
            width={500}
            alt={`${eventData.image}`}
            className="w-full h-full rounded-lg shadow-lg"
          />
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

        <div className="bg-gray-200 mb-6 mx-6 rounded-lg flex flex-col justify-between p-6">
          <div className="">
            <p className="text-3xl ">Attendees:</p>
            {eventData?.atendees?.map((person) => {
              return (
                <ul key={person} className="gap-2">
                  <li key={person}>{person}</li>
                </ul>
              );
            })}
          </div>

          <div className="">
            <p className="text-3xl ">Cost: ${eventData.cost}</p>
          </div>

          <div className="flex justify-end">
            <Button
              onPress={handleBuyTicket}
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-6 px-8 uppercase rounded"
            >
              Buy Ticket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
