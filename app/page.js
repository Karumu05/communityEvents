"use client";

import CommunityELogo from "./UI/communityELogo";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    redirect("/home");
  }

  return (
    <main className="flex h-screen min-h-screen flex-col p-2">
      <header
        className={` flex flex-col bg-red-400 w-full md:h-52 rounded-lg justify-end p-5`}
      >
        <CommunityELogo />
      </header>

      <section className="flex flex-col h-full md:flex-row gap-3 my-2 justify-evenly">
        <div
          id="welcome-message"
          className="bg-slate-200 w-full h-52 md:h-full flex justify-center items-center rounded-lg "
        >
          <section className=" w-1/2 rounded-lg">
            <p className="leading-normal md:text-3xl">
              <strong>
                Welcome to{" "}
                <span className={`  text-red-400`}>
                  {" "}
                  Community Events.
                </span>{" "}
              </strong>{" "}
              Please log in or register to get started.
            </p>
          </section>
        </div>

        <div
          id="Log-in"
          className="w-full h-full flex flex justify-center items-center"
        >
          <section className="bg-slate-200 rounded-lg p-5">
            <a href="/api/auth/login">
              <div className="bg-red-400 p-5 rounded-lg text-lg font-semibold hover:bg-red-500">
                Login or Register here
              </div>
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
