import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const AttendanceTab = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        height="auto"
        events={[
          { title: "Present", date: "2025-07-01" },
          { title: "Absent", date: "2025-07-03", color: "#e53e3e" },
          { title: "Present", date: "2025-07-04" },
          { title: "Absent", date: "2025-07-08", color: "#e53e3e" },
        ]}
      />
    </div>
  );
};

export default AttendanceTab;
