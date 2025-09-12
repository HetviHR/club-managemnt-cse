import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";
import ClubHeader from "../../components/ClubHeader.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import StudentRequests from "../../components/StudentRequests.jsx";
import EventList from "../../components/EventList.jsx";
import EventModal from "../../components/EventModal.jsx";

export default function FacultyDashboard() {
  const [club, setClub] = useState({
    name: "TechGenius Club",
    description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
    banner: "/techgenius.png",
  });

  const [requests, setRequests] = useState([
    { _id: "1", name: "Rahul Sharma", email: "rahul@charusat.edu.in", branch: "CSE" },
    { _id: "2", name: "Priya Patel", email: "priya@charusat.edu.in", branch: "IT" },
  ]);

  const [events, setEvents] = useState([
    { _id: "1", title: "Hackathon 2025", description: "24-hour coding competition", date: "2025-09-20" },
    { _id: "2", title: "AI Workshop", description: "Learn basics of AI/ML", date: "2025-10-10" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  // Approve/Reject handlers
  const handleApprove = (id) => setRequests(requests.filter((r) => r._id !== id));
  const handleReject = (id) => setRequests(requests.filter((r) => r._id !== id));

  // Event CRUD handlers
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
      setEvents(events.map((e) => (e._id === editingEvent._id ? { ...eventData, _id: editingEvent._id } : e)));
    } else {
      setEvents([...events, { ...eventData, _id: Date.now().toString() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <ClubHeader club={club} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <StatsCard label="Members" value="180" />
          <StatsCard label="Join Requests" value={requests.length} />
          <StatsCard label="Events" value={events.length} />
        </div>

        <StudentRequests requests={requests} onApprove={handleApprove} onReject={handleReject} />

        <EventsList events={events} onAdd={handleAddEvent} onEdit={handleEditEvent} onDelete={handleDeleteEvent} />

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
