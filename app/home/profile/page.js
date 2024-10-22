"use client"
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {

const { user, error, isLoading } = useUser()





  return (
    <>
      <div className="absolute top-0 w-3/4 h-1/4  bg-gradient-to-r from-red-400 "></div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full pr-6 ">
        <div id="profilePic">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
          <p className="text-7xl font-bold text-gray-900 ">User Name</p>
          <p className="text-lg font-medium text-gray-600">Manager</p>
        </div>

        <div
          id="userEvents"
          className="row-span-2 bg-gray-200 m-16 rounded-lg"
        >
          <p className="text-xl font-semibold shadow-lg text-gray-600 p-6">Upcoming Events:</p>
        </div>

        <div id="Account Info" className="bg-gray-200 mt-16 rounded-lg ">
        <p className="text-xl font-semibold shadow-lg text-gray-600 p-6">Account Info:</p>

        </div>

        <div className="bg-gray-200 mb-16 rounded-lg "></div>
      </div>
    </>
  );
}
