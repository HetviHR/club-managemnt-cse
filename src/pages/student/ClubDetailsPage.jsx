import { useNavigate } from "react-router-dom";
const ClubDetailsPage = () => {
const navigate = useNavigate();

  return(
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        marginBottom: '40px',
        margin:'20px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px',
          marginLeft:'18%'
        }}>
          All Clubs
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#666',
          margin: '0',
          marginLeft:'19%'
        }}>
          Discover and join clubs that match your interests and passions.
        </p>
      </div>

      {/* Club Cards */}
      <div style={{
         maxWidth: "2000px",
          margin: "0 auto", // Center all cards
          display: "flex",
          gap: "40px", // Equal spacing between cards
          flexWrap: "wrap",
          justifyContent: "center", // Equal spacing left & right
        
      }}>
        
        {/* AIML Club Card */}
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
              onClick={()=> navigate(`/student/aimlclub`)} 
          >
              View Details
            </button>
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
                CyberKavach Club
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
            <button style={{
              background: 'linear-gradient(145deg, #3998D8, #1E5072)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              View Details
            </button>
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
            onClick={()=> navigate(`/student/tech`)} >
              View Details
            </button>
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
            onClick={()=> navigate(`/student/tech`)} >
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>
  
  )
};

export default ClubDetailsPage;