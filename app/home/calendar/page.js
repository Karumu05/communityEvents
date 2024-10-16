"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import InteractionPlugin  from "@fullcalendar/interaction"

export default function Page() {

    const handleDateClick = (arg) => {
            alert(arg.dateStr)
    }


    return (
        <div className="p-6 h-full">
            <FullCalendar 
            plugins={[dayGridPlugin, InteractionPlugin]}
            initialView="dayGridMonth"
            events={[{ title: "Test Event", date: "2024-10-15"}]}
            dateClick={handleDateClick}
            height={"100%"}
            />
        </div>
    )
}
