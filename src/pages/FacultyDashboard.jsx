import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar.jsx";
import ClubHeader from "../components/ClubHeader.jsx";
import Request from "../components/RequestsPage.jsx";
import EventList from "../components/EventList.jsx";
import EventModal from "../components/EventModal.jsx";
import "./FacultyDashboard.css";

export default function FacultyDashboard() {
  const [club] = useState({
    name: "TechGenius Club",
    description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
    banner: "/techgenius.png",
  });
  
  const [requests, setRequests] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = "http://localhost:5000";

  // Get user info from localStorage (simulating login)
  const user = JSON.parse(localStorage.getItem("user"));
  const facultyClubId = user?.clubId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch pending requests for the faculty's club
        const requestsResponse = await axios.get(`${backendUrl}/api/clubs/requests?clubId=${facultyClubId}`);
        setRequests(requestsResponse.data);

        // Fetch events for the faculty's club
        const eventsResponse = await axios.get(`${backendUrl}/api/events?clubId=${facultyClubId}`);
        setEvents(eventsResponse.data);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (facultyClubId) {
      fetchData();
    }
  }, [facultyClubId]);

  const handleApprove = async (requestId) => {
    try {
      await axios.put(`${backendUrl}/api/clubs/request/${requestId}`, { status: "accepted" });
      setRequests(requests.filter((req) => req._id !== requestId));
    } catch (err) {
      console.error("Failed to approve request:", err);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await axios.put(`${backendUrl}/api/clubs/request/${requestId}`, { status: "rejected" });
      setRequests(requests.filter((req) => req._id !== requestId));
    } catch (err) {
      console.error("Failed to reject request:", err);
    }
  };
  
  const handleSaveEvent = async (eventData) => {
    try {
      if (editingEvent) {
        const response = await axios.put(`${backendUrl}/api/events/${editingEvent._id}`, eventData);
        setEvents(events.map((e) => (e._id === editingEvent._id ? response.data : e)));
      } else {
        const response = await axios.post(`${backendUrl}/api/events`, { ...eventData, clubId: facultyClubId });
        setEvents([...events, response.data]);
      }
      setModalOpen(false);
    } catch (err) {
      console.error("Failed to save event:", err);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`${backendUrl}/api/events/${eventId}`);
      setEvents(events.filter((e) => e._id !== eventId));
    } catch (err) {
      console.error("Failed to delete event:", err);
    }
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setModalOpen(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setModalOpen(true);
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
