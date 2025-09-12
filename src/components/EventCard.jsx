<<<<<<< HEAD
=======

>>>>>>> 69049c6c45c3300281afbd0b9e806c9214761a9a
import React from "react";

export default function EventCard({ event, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h4 className="text-lg font-bold">{event.title}</h4>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-sm text-gray-500 mt-1">
        {new Date(event.date).toLocaleDateString()}
      </p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(event)}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(event._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
