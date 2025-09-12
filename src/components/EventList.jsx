import React from "react";
import "./EventList.css";

export default function EventList({ events, onAdd, onEdit, onDelete }) {
  return (
    <div className="event-list">
      {/* Add Event Button */}
      <button className="add-btn" onClick={onAdd}>
        + Add Event
      </button>

      {/* Event Cards */}
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <h4>{event.title}</h4>
          <p>{event.description}</p>
          <p>
            <strong>{event.date}</strong>
          </p>

          <div className="event-actions">
            <button
              onClick={() => onEdit(event)}
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(event._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
