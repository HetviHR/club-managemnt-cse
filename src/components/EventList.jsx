import React from "react";
import EventCard from "./EventCard";

export default function EventsList({ events, onAdd, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Manage Events</h3>
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Event
        </button>
      </div>
      {events.length === 0 ? (
        <p className="text-gray-500">No events found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
