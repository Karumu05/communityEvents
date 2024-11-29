"use client";
import { postEvent } from "@/app/lib/data";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    createdBy: "",
    location: "",
    ticketAmount: 0,
    image: "",
    cost: 0,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      postEvent(formData).then((result) => {
        if (result.title === formData.title) {
          router.back();
        }
      });
    } catch (error) {
      console.error("Event failed to post", error);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-red-300 p-6 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Event Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Event Date:</label>
          <input
            type="text"
            placeholder="2024-10-25"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Event Description:</label>
          <input
            type="textbox"
            size={50}
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />


          <label htmlFor="cost">Ticket Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <label htmlFor="createdBy">Event Creator Name:</label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
