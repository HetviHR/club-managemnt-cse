import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
const ClubDetailsPage = () => {
const navigate = useNavigate();
// Dummy user for demonstration; replace with actual user context
const user = { name: "Student Name", id: "123" };

const handleJoinClub = async (clubName) => {
  try {
    await fetch("/api/requests/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ club: clubName, student: user.name, studentId: user.id })
    });
    alert(`Request to join ${clubName} sent!`);
  } catch (err) {
    alert("Failed to send request");
  }
};
=======
>>>>>>> fb9cb2a18748e16dd00a7786a7ad7d1bff10d586

const ClubDetailsPage = () => {
  const navigate = useNavigate();

  const clubs = [
    {
      name: "AIML Club",
      category: "Technology",
      members: 180,
      description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
      image: "/images/logo.png", // public folder image
      link: "/student/aimlclub",
    },
    {
      name: "CyberKavach Club",
      category: "Technology",
      members: 180,
      description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
      image: "/images/cyberkavach.jpg",
      link: "/student/cyber",
    },
    {
      name: "Techgenius Club",
      category: "Technology",
      members: 180,
      description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
      image: "/images/techgenius_logo.png",
      link: "/student/tech",
    },
    {
      name: "Eyecoders Club",
      category: "Technology",
      members: 180,
      description: "Enhance programming skills through coding challenges, hackathons, and collaborative projects.",
      image: "/images/eyecoders.jpg",
      link: "/student/eyecoders",
    },
  ];

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
