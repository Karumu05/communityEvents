"use client";

import { fetchEvents } from "@/app/lib/data";
import ProfileEventCard from "@/app/UI/home/profileEventCard";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [attendingEvents, setAttendingEvents] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    const fetchAndFilterEvents = async () => {
      const results = await fetchEvents();
      const filteredEvents = results.filter((event) =>
        event.atendees.includes(user?.nickname)
      );
      setAttendingEvents(filteredEvents);
    };

    fetchAndFilterEvents();
  }, [user]);

  return (
    <>
      <div className="absolute top-0 w-3/4 h-1/4  bg-gradient-to-r from-red-400 "></div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full pr-6 ">
        <div id="profilePic">
          <Image
            src={user?.picture}
            height={400}
            width={400}
            className="rounded-full md:mx-16 relative top-5 shadow-lg"
            alt="Your Profile picture"
          />
        </div>

        <div
          id="username"
          className="relative flex flex-col h-full justify-center gap-4 sm:mt-0 sm:pt-1 sm:text-left"
        >
          <p className="text-xl font-medium text-gray-600">Welcome back,</p>
          <p className="text-7xl font-bold text-gray-900 ">{user?.nickname}</p>
          <p className="text-lg font-medium text-gray-600">User Account</p>
        </div>

        <div
          id="userEvents"
          className="row-span-2 bg-gray-200 m-16 rounded-lg overflow-y-auto"
        >
          <p className="text-xl font-semibold shadow-lg text-gray-600 p-6">
            Upcoming Events:
          </p>

          {attendingEvents?.map((event) => {
            const formattedDate = event?.date?.match(/^[^T]*/);
            return (
              <ProfileEventCard
                image={event.image}
                name={event.title}
                date={formattedDate}
                description={event.description}
                location={event.location}
              />
            );
          })}
        </div>

        <div id="Account Info" className="bg-gray-200 mt-16 rounded-lg ">
          <p className="text-xl font-semibold shadow-lg text-gray-600 p-6">
            Account Info:
          </p>
          <div className="flex flex-col text-xl p-6 h-full">
            <p>Email: {user?.email}</p>
          </div>
        </div>

        <div className="bg-gray-200 mb-16 rounded-lg "></div>
      </div>
    </>
  );
}
