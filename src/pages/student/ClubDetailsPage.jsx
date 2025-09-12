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
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ maxWidth: "1200px", marginBottom: "40px", margin: "20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginBottom: "10px", marginLeft: "18%" }}>
          All Clubs
        </h1>
        <p style={{ fontSize: "20px", color: "#666", margin: "0", marginLeft: "19%" }}>
          Discover and join clubs that match your interests and passions.
        </p>
      </div>

      {/* Club Cards */}
      <div style={{
        maxWidth: "2000px",
        margin: "0 auto",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {clubs.map((club, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            width: '350px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
          }}>
<<<<<<< HEAD
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#ddd',
              borderRadius: '50%',
              marginRight: '15px'
            }}></div>
            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
              }}>
                AIML Club
              </h3>
              <span style={{
                background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Technology
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '80px'
          }}>
            Enhance programming skills through coding challenges, hackathons, and collaborative projects.
          </p>

          {/* Members and Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#666'
            }}>
              <span style={{ marginRight: '8px' }}>👥</span>
              180 Members
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/student/aimlclub`)}
              >
                View Details
              </button>
              <button
                style={{
                  background: '#ff9800',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => handleJoinClub("AIML Club")}
              >
                Join Club
              </button>
            </div>
          </div>
        </div>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          width: '350px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'left'
        }}>
=======
>>>>>>> fb9cb2a18748e16dd00a7786a7ad7d1bff10d586
            {/* Club Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img 
                src={club.image} 
                alt={club.name} 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  marginRight: '15px',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: '0' }}>
                  {club.name}
                </h3>
                <span style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {club.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginBottom: '80px' }}>
              {club.description}
            </p>

            {/* Members and Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#666' }}>
                <span style={{ marginRight: '8px' }}>👥</span>
                {club.members} Members
              </div>
              <button style={{
                background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onClick={() => navigate(club.link)}>
                View Details
              </button>
            </div>
          </div>
<<<<<<< HEAD

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '80px'
          }}>
            Enhance programming skills through coding challenges, hackathons, and collaborative projects.
          </p>

          {/* Members and Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#666'
            }}>
              <span style={{ marginRight: '8px' }}>👥</span>
              180 Members
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => handleJoinClub("CyberKavach Club")}
              >
                Join Club
              </button>
              <button
                style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/student/tech`)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          width: '350px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'left'
        }}>
          {/* Club Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#ddd',
              borderRadius: '50%',
              marginRight: '15px'
            }}></div>
            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
              }}>
                Techgenius Club
              </h3>
              <span style={{
                background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Technology
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '80px'
          }}>
            Enhance programming skills through coding challenges, hackathons, and collaborative projects.
          </p>

          {/* Members and Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#666'
            }}>
              <span style={{ marginRight: '8px' }}>👥</span>
              180 Members
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  background: '#ff9800',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => handleJoinClub("Techgenius Club")}
              >
                Join Club
              </button>
              <button
                style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/student/tech`)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Eyecoders Club Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          width: '350px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'left'
        }}>
          {/* Club Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <img 
  src={/student/}
  alt="AIML Club" 
  style={{
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
    objectFit: 'cover'
  }} 
/>
            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
              }}>
                Eyecoders club
              </h3>
              <span style={{
                background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Technology
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '80px'
          }}>
            Enhance programming skills through coding challenges, hackathons, and collaborative projects.
          </p>

          {/* Members and Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#666'
            }}>
              <span style={{ marginRight: '8px' }}>👥</span>
              180 Members
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  background: '#ff9800',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => handleJoinClub("Eyecoders Club")}
              >
                Join Club
              </button>
              <button
                style={{
                  background: 'linear-gradient(145deg, #3998D8, #1E5072)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/student/tech`)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>

=======
        ))}
>>>>>>> fb9cb2a18748e16dd00a7786a7ad7d1bff10d586
      </div>
    </div>
  )
};

export default ClubDetailsPage;
