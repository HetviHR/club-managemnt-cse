import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClubDetails = () => {
    const [club, setClub] = useState(null);
    const [members, setMembers] = useState([]);
    const [events, setEvents] = useState([]);
    const [requestStatus, setRequestStatus] = useState("idle"); // 'idle', 'pending', 'accepted', 'rejected'
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { clubId } = useParams();
    const navigate = useNavigate();
    const backendUrl = "http://localhost:5000";

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?._id;

    useEffect(() => {
        const fetchClubData = async () => {
            try {
                // Fetch club details
                const clubResponse = await axios.get(`${backendUrl}/api/clubs/${clubId}`);
                setClub(clubResponse.data);

                // Fetch members of this club
                const membersResponse = await axios.get(`${backendUrl}/api/users?clubId=${clubId}`);
                setMembers(membersResponse.data);

                // Fetch events for this club
                const eventsResponse = await axios.get(`${backendUrl}/api/events?clubId=${clubId}`);
                setEvents(eventsResponse.data);

                // Check student's request status
                if (userId) {
                    const statusResponse = await axios.get(`${backendUrl}/api/clubs/requests/status?studentId=${userId}&clubId=${clubId}`);
                    setRequestStatus(statusResponse.data.status);
                }

                setLoading(false);
            } catch (err) {
                setError("Failed to fetch club details. Please try again.");
                setLoading(false);
                console.error(err);
            }
        };

        if (clubId) {
            fetchClubData();
        }
    }, [clubId, userId]);

    const handleSendRequest = async () => {
        if (!userId) {
            alert("You must be logged in to send a request.");
            return;
        }
        try {
            await axios.post(`${backendUrl}/api/clubs/request`, { studentId: userId, clubId });
            setRequestStatus("pending");
            alert("Request sent successfully!");
        } catch (err) {
            console.error("Error sending request:", err);
            alert("Failed to send request.");
        }
    };
    
    if (loading) {
        return <div className="loading">Loading club details...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!club) {
        return <div className="error">Club not found.</div>;
    }

    return (
        <div className="club-details-page">
            <button onClick={() => navigate('/student/clubs')} className="back-button">
                &larr; Back to Clubs
            </button>
            <h1 className="club-title">{club.name}</h1>
            <p className="club-description">{club.description}</p>
            
            <div className="members-section">
                <h2>Members ({members.length})</h2>
                <ul>
                    {members.map(member => (
                        <li key={member._id}>{member.name}</li>
                    ))}
                </ul>
            </div>
            
            <div className="events-section">
                <h2>Upcoming Events ({events.length})</h2>
                {events.length > 0 ? (
                    <ul>
                        {events.map(event => (
                            <li key={event._id}>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No upcoming events at this time.</p>
                )}
            </div>
            
            <div className="request-action-section">
                {requestStatus === "idle" && (
                    <button onClick={handleSendRequest} className="join-button">
                        Join Club
                    </button>
                )}
                {requestStatus === "pending" && (
                    <button disabled className="pending-button">
                        Request Pending
                    </button>
                )}
                {requestStatus === "accepted" && (
                    <button disabled className="accepted-button">
                        Already a Member
                    </button>
                )}
                {requestStatus === "rejected" && (
                    <button disabled className="rejected-button">
                        Request Rejected
                    </button>
                )}
            </div>
        </div>
    );
};

export default ClubDetails;
