import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ClubHeader from "../components/ClubHeader.jsx";
import Request from "../components/StudentRequests.jsx"; 
import EventList from "../components/EventList.jsx";
import EventModal from "../components/EventModal.jsx";
import "./FacultyDashboard.css";

export default function FacultyDashboard() {
  const [club] = useState({
    name: "TechGenius Club",
    description:
      "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
    banner: "/techgenius.png",
  });

  const [requests, setRequests] = useState([
    { _id: "1", name: "Rahul Sharma", email: "rahul@charusat.edu.in", branch: "CSE" },
    { _id: "2", name: "Priya Patel", email: "priya@charusat.edu.in", branch: "IT" },
  ]);

  const [events, setEvents] = useState([
    {
      _id: "1",
      title: "Hackathon 2025",
      description: "24-hour coding competition",
      date: "2025-09-20",
    },
    {
      _id: "2",
      title: "AI Workshop",
      description: "Learn basics of AI/ML",
      date: "2025-10-10",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleApprove = (id) => setRequests(requests.filter((r) => r._id !== id));
  const handleReject = (id) => setRequests(requests.filter((r) => r._id !== id));

  const handleAddEvent = () => {
    setEditingEvent(null);
    setModalOpen(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setModalOpen(true);
  };

  const handleDeleteEvent = (id) => setEvents(events.filter((e) => e._id !== id));

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEvents(
        events.map((e) =>
          e._id === editingEvent._id ? { ...eventData, _id: editingEvent._id } : e
        )
      );
    } else {
      setEvents([...events, { ...eventData, _id: Date.now().toString() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-container">
        <ClubHeader club={club} />

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-box">
            <h2>180</h2>
            <p>Members</p>
          </div>
          <div className="stat-box">
            <h2>{requests.length}</h2>
            <p>Join Requests</p>
          </div>
          <div className="stat-box">
            <h2>{events.length}</h2>
            <p>Events</p>
          </div>
        </div>

        {/* Requests */}
        <div className="blue-card">
          <h3>Student Join Requests</h3>
          <Request
            requests={requests}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>

        {/* Events */}
        <div className="blue-card">
          <h3>Manage Events</h3>
          <EventList
            events={events}
            onAdd={handleAddEvent}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
          />
        </div>

        {/* Modal */}
        <EventModal
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveEvent}
          eventData={editingEvent}
        />
      </div>
    </div>
  );
}
